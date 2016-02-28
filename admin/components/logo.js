(function() {
    'use strict';

    angular
        .module('sls')
        .directive('logo', logo);

    function logo() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'logo.html',
            link: linkFunc,
            controller: logoController, // 'logoController' if in separate file
            controllerAs: 'logo'
        };

        return directive;

        function linkFunc(scope, element, attr, logo) {
            //
        }
    }

    logoController.$inject = ['$scope'];

    function logoController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var logo = this;        

        //
        
    }
    
})();
