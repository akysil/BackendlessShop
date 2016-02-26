(function() {
    'use strict';

    angular
        .module('sls')
        .directive('rightmenu', rightmenu);

    function rightmenu() {
        
        var directive = {
            restrict: 'A',
            templateUrl: 'rightmenu.html',
            link: linkFunc,
            controller: rightmenuController, // 'rightmenuController' if in separate file
            controllerAs: 'rightmenu'
        };

        return directive;

        function linkFunc(scope, element, attr, rightmenu) {
            //
        }
    }

    rightmenuController.$inject = ['$scope', 'Cache', 'Reformator'];

    function rightmenuController($scope, Cache, Reformator) {
        
        // as controllerAs
        /* jshint validthis: true */
        var rightmenu = this;        

        Cache.get('products').then(function(data) {
            rightmenu.list = Reformator.menu(data);
        });
        
    }
    
})();
