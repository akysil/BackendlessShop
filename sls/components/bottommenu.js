(function() {
    'use strict';

    angular
        .module('sls')
        .directive('bottommenu', bottommenu);

    function bottommenu() {
        
        var directive = {
            restrict: 'A',
            templateUrl: 'bottommenu.html',
            link: linkFunc,
            controller: bottommenuController, // 'bottommenuController' if in separate file
            controllerAs: 'bottommenu'
        };

        return directive;

        function linkFunc(scope, element, attr, bottommenu) {
            //
        }
    }

    bottommenuController.$inject = ['$scope'];

    function bottommenuController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var bottommenu = this;        

        //
        
    }
    
})();
