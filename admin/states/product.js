(function() {
    'use strict';

    angular
        .module('sls')
        .controller('productController', productController);

    productController.$inject = ['$state'];
    
    function productController($state) {
        
        // as controllerAs
        /* jshint validthis: true */
        var product = this;

        product.state = $state.params.link;

        console.log($state.params.link);

    }
        
})();