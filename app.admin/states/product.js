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

        if(product.currentLink) {
            Data.getTable('products').then(function(data) {
                var list = data.data.data;
                for (var i = 0; i < list.length; i++) {
                    if(list[i].link === product.currentLink)
                        product.item = list[i];
                }
            });
        }
            

        Data.getTable('categories').then(function(data) {
            product.allCategories = data.data.data;
        });

        Data.getFiles('pictures').then(function(data) {
            product.allPictures = data.data.data;
        });

        product.categoryMatch = function(currentLink, all) {
            if(!all) return;
            for (var i = 0; i < all.length; i++) {
                if(all[i].link === currentLink) return true;
            }
        };

        product.submit = function(item) {
            
            for (var i = 0; i < item.category.length; i++) {
                item.category[i] = angular.fromJson(item.category[i]);
            }

            if(item.objectId) {
                Data.update(item, 'products', item.objectId).then(function(data) {
                    alert(data.statusText);
                    $state.go('products', {link:item.link});
                });
            } else {
                Data.add(item, 'products').then(function(data) {
                    alert(data.statusText);
                });
            }
                
        };

        product.delete = function(item) {

            Data.remove('products', item.objectId).then(function(data) {
                alert(data.statusText);
            });
                
        };

    }

})();