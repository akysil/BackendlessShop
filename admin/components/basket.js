(function() {
    'use strict';

    angular
        .module('sls')
        .directive('basket', basket);

    function basket() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'basket.html',
            link: linkFunc,
            controller: basketController, // 'basketController' if in separate file
            controllerAs: 'basket'
        };

        return directive;

        function linkFunc(scope, element, attr, basket) {
            //
        }
    }

    basketController.$inject = ['$scope'];

    function basketController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var basket = this;        

        //
        
    }
    
})();
