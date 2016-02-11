(function() {
    'use strict';

    angular
        .module('app')
        .directive('footer', footer);

    function footer() {
        var directive = {
            restrict: 'E',
            templateUrl: 'footer.html',
            link: linkFunc,
            controller: footerController, // 'footerController' if in separate file
            controllerAs: 'footer'
        };

        return directive;

        function linkFunc(scope, el, attr, footer) {
            //
        }
    }

    footerController.$inject = ['$scope', 'Storage'];

    function footerController($scope, Storage) {
        
        // as controllerAs
        /* jshint validthis: true */
        var footer = this;        

        //

        
    }
    
})();
