(function() {
    'use strict';

    angular
        .module('app')
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

        function linkFunc(scope, el, attr, search) {
            //
        }
    }

    searchController.$inject = ['$scope', '$location'];

    function searchController($scope, $location) {
        
        // as controllerAs
        /* jshint validthis: true */
        var search = this;
        

        //if ($location.path().indexOf('search')) search.show = true;
        

        //

        
    }
    
})();
