(function() {
    'use strict';

    angular
        .module('app')
        .directive('breadcrumbs', breadcrumbs);

    function breadcrumbs() {
        var directive = {
            restrict: 'A',
            templateUrl: 'breadcrumbs.html',
            link: linkFunc,
            controller: breadcrumbsController, // 'breadcrumbsController' if in separate file
            controllerAs: 'breadcrumbs'
        };

        return directive;

        function linkFunc(scope, el, attr, breadcrumbs) {
            //
        }
    }

    breadcrumbsController.$inject = ['$scope', '$location'];

    function breadcrumbsController($scope, $location) {
        
        // as controllerAs
        /* jshint validthis: true */
        var breadcrumbs = this;
        

        //if ($location.path().indexOf('breadcrumbs')) breadcrumbs.show = true;
        

        //

        
    }
    
})();
