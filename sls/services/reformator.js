
(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Reformator', Reformator);

    Reformator.$inject = [];

    function Reformator() {

        var menu = [];
        var catalog;
        
        var service = {
            menu: menuFunc
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
