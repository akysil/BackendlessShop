(function() {
    'use strict';

    angular
        .module('sls')
        .directive('productstree', productstree);

    function productstree() {
        
        var directive = {
            restrict: 'A',
            templateUrl: 'productstree.html',
            link: linkFunc,
            controller: productstreeController, // 'productstreeController' if in separate file
            controllerAs: 'productstree'
        };

        return directive;

        function linkFunc(scope, element, attr, productstree) {
            //
        }
    }

    productstreeController.$inject = ['$scope', 'Cache'];

    function productstreeController($scope, Cache) {
        
        // as controllerAs
        /* jshint validthis: true */
        var productstree = this;        

        Cache.get('plants').then(function(data) {
            productstree.plants = data;
        });
        
    }
    
})();
