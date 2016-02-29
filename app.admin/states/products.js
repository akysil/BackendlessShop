(function() {
    'use strict';

    angular
        .module('sls.admin')
        .controller('productsController', productsController);

    productsController.$inject = ['Data'];

    function productsController(Data) {

        // as controllerAs
        /* jshint validthis: true */
        var products = this;

        Data.get('products').then(function(data) {
            products.list = data.data.data;
        });


    }

})();