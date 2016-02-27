
(function() {
    'use strict';

    angular
        .module('sls')
        .directive('leftmenu', leftmenu);

    function leftmenu() {

        var directive = {
            restrict: 'A',
            templateUrl: 'leftmenu.html',
            link: linkFunc,
            controller: leftmenuController, // 'leftmenuController' if in separate file
            controllerAs: 'leftmenu'
        };

        return directive;

        function linkFunc(scope, element, attr, leftmenu) {
            //
        }
    }

    leftmenuController.$inject = ['$scope', 'Cache', 'Reformator'];

    function leftmenuController($scope, Cache, Reformator) {

        // as controllerAs
        /* jshint validthis: true */
        var leftmenu = this;

        function getSyncProducts() {
            return Cache.getSync.products;
        }

        $scope.$watch(getSyncProducts, function(newVal, oldVal) {
            leftmenu.list = Reformator.menu(newVal);
        });

    }

})();
