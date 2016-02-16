(function() {
    'use strict';

    angular
        .module('sls')
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

        function linkFunc(scope, element, attr, breadcrumbs) {
            //
        }
    }

    breadcrumbsController.$inject = ['$scope'];

    function breadcrumbsController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var breadcrumbs = this;        

        //
        
    }
    
})();
