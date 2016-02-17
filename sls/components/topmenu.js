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

    topmenuController.$inject = ['$scope', '$timeout', 'Cache'];

    function topmenuController($scope, $timeout, Cache) {
        
        // as controllerAs
        /* jshint validthis: true */
        var topmenu = this;
        
        topmenu.list = Cache.get('pages');

        console.log(Cache.get('pages'));

        $timeout(function(){
            console.log(topmenu.list);
        }, 1000);
        
    }
    
})();
