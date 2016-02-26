(function() {
    'use strict';

    angular
        .module('sls')
        .controller('productController', productController);

    productController.$inject = ['$scope'];
    
    function productController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var product = this;

    }
        
})();
