(function() {
    'use strict';

    angular
        .module('sls.admin')
        .controller('productController', productController);

    productController.$inject = ['$state', 'Data'];

    function productController($state, Data) {

        // as controllerAs
        /* jshint validthis: true */
        var product = this;

        product.currentLink = $state.params.link;

        Data.get('products').then(function(data) {
            product.list = data.data.data;
        });

        Data.get('categories').then(function(data) {
            product.allCategories = data.data.data;
        });

        product.categoryMatch = function(currentLink, all) {

            for (var i = 0; i < all.length; i++) {
                if(all[i].link === currentLink) return true;
            }
        };

        product.itemConsole = function(item) {

            for (var i = 0; i < item.category.length; i++) {
                item.category[i] = angular.fromJson(item.category[i]);
            }

            console.log(item);
        };

    }

})();