(function() {
    'use strict';

    angular
        .module('sls')
        .config(config);

    config.$inject = ['$httpProvider', '$stateProvider', '$locationProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider', 'StateConfigProvider'];

    function config($httpProvider, $stateProvider, $locationProvider, $urlRouterProvider, $urlMatcherFactoryProvider, StateConfigProvider) {
        
        if (window.location.hostname === ('localhost' || 'cvetnik.com.ua')) $locationProvider.html5Mode(true);

        $httpProvider.interceptors.push('Credentials');
        $httpProvider.interceptors.push(function() {
            return {
                request: function(config) {
                    //console.log(config);
                    return config;
                }
            };
        });

        // remove the last slash
        $urlRouterProvider.rule(function ($injector, $location) {
            var re = /(.+)(\/+)(\?.*)?$/;
            var path = $location.url();
            if(re.test(path)) {
                return path.replace(re, '$1$3');
            }
            return false;
        });

        // move $state config to .run()
        StateConfigProvider.set($stateProvider);
        $urlRouterProvider.deferIntercept();
    }


        
})();
