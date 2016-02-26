
(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Reformator', Reformator);

    Reformator.$inject = [];

    function Reformator() {

        var menu, catalog;
        
        var service = {
            menu: menuFunc
        };

        return service;

        function menuFunc(data) {

            if(menu) return menu;
 
            var productsForMenu = [];

            for (var i = 0, j = data.length; i < j; i++) {
                productsForMenu = productsForMenu.concat(productsFromProduct(data[i]));
            }

            return (menu = productsForMenu);

            function productsFromProduct(product) {

                var newProducts = [];

                for (var i = 0, j = product.category.length; i < j; i++) {

                    newProducts[newProducts.length] = {
                        title:            product.title,
                        link:             product.link,
                        categoryTitle:    product.category[i].title,
                        categoryLink:     product.category[i].link,
                        categoryPriority: product.category[i].priority,
                        categorySide:     product.category[i].side
                    };

                }

                return newProducts;

            }

        }

    }

})();
