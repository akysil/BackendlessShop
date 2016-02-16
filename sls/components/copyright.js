(function() {
    'use strict';

    angular
        .module('sls')
        .directive('copyright', copyright);

    function copyright() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'copyright.html',
            link: linkFunc,
            controller: copyrightController, // 'copyrightController' if in separate file
            controllerAs: 'copyright'
        };

        return directive;

        function linkFunc(scope, element, attr, copyright) {
            //
        }
    }

    copyrightController.$inject = ['$scope'];

    function copyrightController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var copyright = this;        

        //
        
    }
    
})();
