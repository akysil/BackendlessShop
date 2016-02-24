(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Reformator', Reformator);

    Reformator.$inject = [];
    
    function Reformator() {
        
        var service = {
            getTree: getTree
        };

        return service;

        function getTree(data) {
            
            var categories = [];
            var tree = [];

            for (var i = 0, j = data.length; i < j; i++) {
                
                setCategories(data[i]);
                console.log(categories);

                setTree();
            }

            return data;

            function setCategories(product) {
                
                for (var i = 0, j = product.category.length; i < j; i++) {
                    if (!~categories.indexOf(product.category[i].name))
                        categories[categories.length] = product.category[i].name;
                }

            }


        }

    }
        
})();
