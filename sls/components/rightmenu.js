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

    rightmenuController.$inject = [];

    function rightmenuController() {
        
        // as controllerAs
        /* jshint validthis: true */
        var rightmenu = this;

        //
        
    }
    
})();
