(function() {
    'use strict';

    angular
        .module('sls.admin')
        .controller('productsController', productsController);

    productsController.$inject = ['$state', 'Data'];

    function productsController($state, Data) {

        // as controllerAs
        /* jshint validthis: true */
        var products = this;

        Data.get('products').then(function(data) {
            products.list = data.data.data;
        });

        products.goTo = function(link) {
            $state.go('product', {link: link});
        };

    }

})();