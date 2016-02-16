(function() {
    'use strict';

    angular
        .module('sls')
        .directive('search', search);

    function search() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'search.html',
            link: linkFunc,
            controller: searchController, // 'searchController' if in separate file
            controllerAs: 'search'
        };

        return directive;

        function linkFunc(scope, element, attr, search) {
            //
        }
    }

    searchController.$inject = ['$scope'];

    function searchController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var search = this;        

        //
        
    }
    
})();
