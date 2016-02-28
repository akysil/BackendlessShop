
(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Reformator', Reformator);

    Reformator.$inject = [];

    function Reformator() {

        var menu = [];
        var products = [];
        
        var service = {
            menu: menuFunc,
            products: productsFunc
        };

        return service;

        function menuFunc(data) {

            if(!data)
                return null;
            if(menu.length)
                return menu;

            for (var i = 0, j = data.length; i < j; i++) {
                menu = menu.concat(productsFromProduct(data[i]));
            }

            return menu;

            function productsFromProduct(product) {

                var newProducts = [];

                for (var i = 0, j = product.category.length; i < j; i++) {

                    newProducts[newProducts.length] = {
                        title:            product.title,
                        link:             product.link,
                        price:            product.price,
                        description:      product.description,
                        pictures:         product.pictures.split('|'),
                        size:             product.size,
                        fullName:         product.fullName,
                        latina:           product.latina,
                        categoryTitle:    product.category[i].title,
                        categoryLink:     product.category[i].link,
                        categoryPriority: product.category[i].priority,
                        categorySide:     product.category[i].side
                    };

                }

                return newProducts;

            }

        }

        function productsFunc(data) {

            if(!data)
                return null;
            if(products.length)
                return products;

            for (var i = 0, j = data.length; i < j; i++) {
                products = products.concat(productsFromProduct(data[i]));
            }

            return products;

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
