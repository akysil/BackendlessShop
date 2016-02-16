(function() {
    'use strict';

    angular
        .module('sls')
        .config(config);

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider'];

    function config($httpProvider, $stateProvider, $urlRouterProvider) {

        $httpProvider.interceptors.push('Credentials');
        $httpProvider.interceptors.push(function() {
            return {
                request: function(config) {
                    //console.log(config);
                    return config;
                }
            };
        });

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "home.html"
            })
            .state('item', {
                url: "/item",
                templateUrl: "item.html"
            })
            .state('text', {
                url: "/text",
                templateUrl: "text.html"
            });
        

        //$locationProvider.html5Mode(true).hashPrefix('!');
    }


        
})();
