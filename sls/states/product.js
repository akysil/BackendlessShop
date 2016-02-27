(function() {
    'use strict';

    angular
        .module('sls')
        .controller('productController', productController);

    productController.$inject = ['$scope', '$state'];
    
    function productController($scope, $state) {
        
        // as controllerAs
        /* jshint validthis: true */
        var product = this;

        console.log($state.params.link);

        //product.content = 

    }
        
})();