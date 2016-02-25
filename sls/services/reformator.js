(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Reformator', Reformator);

    Reformator.$inject = [];
    
    function Reformator() {

        var service = {
            menu: menu
        };

        return service;

        function menu(data) {
            
            var productsForMenu = [];

            for (var i = 0, j = data.length; i < j; i++) {
                productsForMenu = productsForMenu.concat(composeNewProducts(data[i]));
            }

            return productsForMenu;

            function composeNewProducts(product) {
                
                var newProducts = [];
                
                for (var i = 0, j = product.category.length; i < j; i++) {

                    newProducts[newProducts.length] = {
                        title: product.title,
                        link: product.link,
                        categoryTitle: product.category[i].title,
                        categoryLink: product.category[i].link,
                        categoryPriority: product.category[i].priority,
                        categorySide: product.category[i].side
                    };

                }

                return newProducts;

            }

        }

    }
        
})();
