(function() {
    'use strict';

    angular
        .module('sls')
        .directive('root', root);

    function root() {
        
        var directive = {
            restrict: 'A',
            //templateUrl: 'root.html',
            link: linkFunc,
            controller: rootController, // 'rootController' if in separate file
            controllerAs: 'root'
        };

        return directive;

        function linkFunc(scope, element, attr, root) {
            //
        }
    }

    rootController.$inject = ['$scope', '$location', 'Cache', 'Reformator'];

    function rootController($scope, $location, Cache, Reformator) {
        
        // as controllerAs
        /* jshint validthis: true */
        var root = this;

        function getSyncProducts() {
            return Cache.getSync.products;
        }

        $scope.$watch(getSyncProducts, function(newVal, oldVal) {
            if(newVal && newVal.length)
                root.list = Reformator.menu(newVal);
        });

        console.log($location.$$url);
        
    }
    
})();
