var         gulp = require('gulp');
var       jshint = require('gulp-jshint');
var       uglify = require('gulp-uglify');
var    minifyCSS = require('gulp-minify-css');
var          del = require('del');
var       concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var         sass = require('gulp-sass');
var  runSequence = require('run-sequence');
var  browserSync = require('browser-sync').create();
var      request = require('request');
var           fs = require('fs');
var        async = require('async');
var       inject = require('gulp-inject');
var inlinesource = require('gulp-inline-source');
var   minifyHTML = require('gulp-htmlmin');

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

////////////////////////////////////////////////////////////////////////////////

gulp.task('clean-dist', function() {
    return del(['./dist/*']);
});

gulp.task('scripts', function() {
    return gulp.src(['app/**/**.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    //.pipe(jshint.reporter('fail'))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/'));
});

gulp.task('styles', function() {
    return gulp.src(['app/scss/app.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({ browsers: BROWSERS }))
    .pipe(minifyCSS(CSSconfig))
    .pipe(gulp.dest('dist/'));
});

gulp.task('files', function () {
    del(['dist/**/*.' + EXTENSIONS]);
    return gulp.src('app/**/*.' + EXTENSIONS)
    .pipe(gulp.dest('dist/'));
});

gulp.task('html', function () {
    return gulp.src('app/index.html')
    .pipe(inject(gulp.src(['app/**/*.html', '!app/index.html']).pipe(minifyHTML(HTMLconfig)), {
        transform: function (filepath, file, index, length, targetFile) {
            return '<script type="text/ng-template" id="'+ filepath.split('/').pop() +'">' + file.contents.toString('utf8') + '</script>\n';
        }
    }))
    .pipe(concat('app.html'))
    .pipe(minifyHTML(HTMLconfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('inline', function () {
    return gulp.src('dist/app.html')
    .pipe(inlinesource())
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('del-app', function () {
    return del('dist/app*');
});

gulp.task('run', function () {
    return runSequence(
        'clean-dist',
        'html',
        'scripts',
        'styles',
        'files',
        'inline',
        'del-app'
    );
});

gulp.task('default', function() {

    runSequence('run');

    browserSync.init({
        open: false,
        notify: false,
        server: {
            baseDir: "./dist/",
            middleware: function (request, response, next) {
                next();
            }
        }
    });


    gulp.watch(['app/scss/*.scss','app/**/*.js','app/**/*.html','app/**/*.' + EXTENSIONS], ['run', browserSync.reload]);
    
    //gulp.watch(['app/**/*.' + EXTENSIONS], ['files']);

});
