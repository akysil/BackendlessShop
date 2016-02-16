(function() {
    'use strict';

    angular
        .module('sls')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');
        

        //$locationProvider.html5Mode(true).hashPrefix('!');
    }


        
})();
