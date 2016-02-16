(function() {
    'use strict';

    angular
        .module('sls')
        .directive('header', header);

    //header.$inject = ['$compile'];

    function header() {
        var directive = {
            restrict: 'E',
            templateUrl: '/sls/header/header.html',
            link: linkFunc,
            controller: headerController, // 'headerController' if in separate file
            controllerAs: 'header'
        };

        return directive;

        function linkFunc(scope, element, attr, header) {
            
            //

        }
    }

    headerController.$inject = ['$scope'];

    function headerController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var header = this;        

        header.current = 'RU';
        
    }
    
})();
