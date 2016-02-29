var               gulp = require('gulp');
var             jshint = require('gulp-jshint');
var             uglify = require('gulp-uglify');
var          minifyCSS = require('gulp-minify-css');
var                del = require('del');
var             concat = require('gulp-concat');
var       autoprefixer = require('gulp-autoprefixer');
var               sass = require('gulp-sass');
var        runSequence = require('run-sequence');
var        browserSync = require('browser-sync').create();
var            request = require('request');
var                 fs = require('fs');
var              async = require('async');
var             inject = require('gulp-inject');
var       inlinesource = require('gulp-inline-source');
var         minifyHTML = require('gulp-htmlmin');
var historyApiFallback = require('connect-history-api-fallback');

var BROWSERS = [
                    'ie >= 10',
                    'ie_mob >= 10',
                    'edge >= 1',
                    'ff >= 30',
                    'chrome >= 34',
                    'safari >= 7',
                    'opera >= 23',
                    'op_mini >= 8',
                    'ios >= 7',
                    'android >= 4.4',
                    'bb >= 10'
];

var EXTENSIONS = '{ico,jpeg,jpg,png,gif}';

var HTMLconfig = {
    collapseWhitespace: true,
    removeComments: true
}

var CSSconfig = {
    comments:true,
    spare:true
}

var appDevFolder    = 'sls';
var appDistFolder   = 'dist';
var adminDevFolder  = 'app.admin';
var adminDistFolder = 'dist.admin';

////////////////////////////////////////////////////////////////////////////////

gulp.task('clean-dist', function() {
    return del([appDistFolder + '/*', adminDistFolder + '/*']);
});

gulp.task('scripts', function() {
    return gulp.src([appDevFolder + '/**/**.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    //.pipe(jshint.reporter('fail'))
    .pipe(concat('sls.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(appDistFolder));
});

gulp.task('scripts.admin', function() {
    return gulp.src([adminDevFolder + '/**/**.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    //.pipe(jshint.reporter('fail'))
    .pipe(concat('admin.js'))
    .pipe(gulp.dest(adminDistFolder));
});

gulp.task('styles', function() {
    return gulp.src([appDevFolder + '/**/*.scss'])
    .pipe(concat('sls.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: BROWSERS }))
    .pipe(minifyCSS(CSSconfig))
    .pipe(gulp.dest(appDistFolder));
});

gulp.task('styles.admin', function() {
    return gulp.src([adminDevFolder + '/**/*.scss'])
    .pipe(concat('admin.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: BROWSERS }))
    .pipe(gulp.dest(adminDistFolder));
});

gulp.task('files', function () {
    del([appDistFolder + '/**/*.' + EXTENSIONS]);
    return gulp.src('assets/**/*.' + EXTENSIONS)
    .pipe(gulp.dest(appDistFolder));
});

gulp.task('html', function () {
    return gulp.src(appDevFolder + '/index.html')
    .pipe(inject(gulp.src([appDevFolder + '*/**/*.html', '!' + appDevFolder + '/index.html']).pipe(minifyHTML(HTMLconfig)), {
        transform: function (filepath, file, index, length, targetFile) {
            return '<script type="text/ng-template" id="'+ filepath.split('/').pop() +'">' + file.contents.toString('utf8') + '</script>\n';
        }
    }))
    .pipe(concat('sls.html'))
    .pipe(minifyHTML(HTMLconfig))
    .pipe(gulp.dest(appDistFolder));
});

gulp.task('html.admin', function () {
    return gulp.src(adminDevFolder + '/index.html')
    .pipe(inject(gulp.src([adminDevFolder + '*/**/*.html', '!' + adminDevFolder + '/index.html']), {
        transform: function (filepath, file, index, length, targetFile) {
            return '<script type="text/ng-template" id="'+ filepath.split('/').pop() +'">' + file.contents.toString('utf8') + '</script>\n';
        }
    }))
    .pipe(concat('admin.html'))
    .pipe(gulp.dest(adminDistFolder));
});

gulp.task('inline', function () {
    return gulp.src(appDistFolder + '/sls.html')
    .pipe(inlinesource({ compress: false }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest(appDistFolder));
});

gulp.task('inline.admin', function () {
    return gulp.src(adminDistFolder + '/admin.html')
    .pipe(inlinesource({ compress: false }))
    .pipe(concat('index.html'))
    .pipe(gulp.dest(adminDistFolder));
});

gulp.task('clear-temp', function () {
    return del([appDistFolder + '/sls*', adminDistFolder + '/admin*']);
});

gulp.task('run', function () {
    return runSequence(
        'clean-dist',
        'html',
        'scripts',
        'styles',
        'files',
        'inline',
        'clear-temp'
    );
});

gulp.task('run.admin', function () {
    return runSequence(
        'clean-dist',
        'html.admin',
        'scripts.admin',
        'styles.admin',
        'inline.admin',
        'clear-temp'
    );
});

gulp.task('default', function() {

    runSequence('run');

    browserSync.init({
        open: false,
        notify: false,
        server: {
            baseDir: './' + appDistFolder,
            middleware: function (request, response, next) {
                next();
            },
            middleware: [ historyApiFallback() ]
        }
    });


    gulp.watch([
        appDevFolder + '*/**/*.scss',
        appDevFolder + '*/**/*.js',
        appDevFolder + '*/**/*.html',
        'assets/**/*.' + EXTENSIONS
        ],
        ['run', browserSync.reload]
    );
    
    //gulp.watch(['app/**/*.' + EXTENSIONS], ['files']);

});

gulp.task('admin', function() {

    runSequence('run.admin');

    browserSync.init({
        open: false,
        notify: false,
        server: {
            baseDir: './' + adminDistFolder,
            middleware: function (request, response, next) {
                next();
            }
        }
    });


    gulp.watch([
        adminDevFolder + '*/**/*.scss',
        adminDevFolder + '*/**/*.js',
        adminDevFolder + '*/**/*.html'
        ],
        ['run.admin', browserSync.reload]
    );

});
