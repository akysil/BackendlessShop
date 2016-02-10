(function() {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];

    function config($httpProvider, $routeProvider, $locationProvider) {

        $httpProvider.interceptors.push('Credentials');
        
        $routeProvider
        .when('/', {
            templateUrl: 'home.html',
            controller: 'homeController',
            controllerAs: 'home'
        })
        .when('/item', {
            templateUrl: 'item.html',
            controller: 'itemController',
            controllerAs: 'item'
        })
        .when('/user', {
            templateUrl: 'user.html',
            controller: 'userController',
            controllerAs: 'user'
        })
        .otherwise({
            redirectTo: '/'
        });
        

        //$locationProvider.html5Mode(true).hashPrefix('!');
    }


        
})();
