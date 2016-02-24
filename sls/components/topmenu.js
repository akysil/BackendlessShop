(function() {
    'use strict';

    angular
        .module('sls')
        .directive('topmenu', topmenu);

    function topmenu() {
        
        var directive = {
            restrict: 'A',
            templateUrl: 'topmenu.html',
            link: linkFunc,
            controller: topmenuController, // 'topmenuController' if in separate file
            controllerAs: 'topmenu'
        };

        return directive;

        function linkFunc(scope, element, attr, topmenu) {
            //
        }
    }

    topmenuController.$inject = ['$scope', 'Cache'];

    function topmenuController($scope, Cache) {
        
        // as controllerAs
        /* jshint validthis: true */
        var topmenu = this;

        $scope.$watch(getList, function(newVal, oldVal) {
            topmenu.list = newVal;
        });

        function getList() {
            return Cache.getCurrent.pages;
        }

    }

    
})();
