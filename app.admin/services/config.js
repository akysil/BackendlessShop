(function() {
    'use strict';

    angular
        .module('sls.admin')
        .config(config);

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];

    function config($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.interceptors.push('Credentials');

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '^/',
                templateUrl: 'home.html',
                controller: 'homeController as home'
            })
            .state('pages', {
                url: '^/pages',
                templateUrl: 'pages.html',
                controller: 'pagesController as pages'
            })
            .state('products', {
                url: '^/products',
                templateUrl: 'products.html',
                controller: 'productsController as products'
            })
            .state('categories', {
                url: '^/categories',
                templateUrl: 'categories.html',
                controller: 'categoriesController as categories'
            });

        

    }


        
})();
