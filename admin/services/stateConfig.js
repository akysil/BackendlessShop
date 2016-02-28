(function() {
    'use strict';

    angular
        .module('sls')
        .provider('StateConfig', StateConfig);

    StateConfig.$inject = [];
    
    function StateConfig() {

        var $stateProviderRef;
        
        var provider = {
            set: function($stateProvider) {
                $stateProviderRef = $stateProvider;
            },
            $get: service
        };

        service.$inject = ['$urlRouter', '$q', 'SETTINGS', 'Cache', 'StateLinks'];

        function service($urlRouter, $q, SETTINGS, Cache, StateLinks) {
            
            var initRequests = [];

            for (var i = 0; i < SETTINGS.BASIC_SRC.length; i++) {
                initRequests.push(Cache.get(SETTINGS.BASIC_SRC[i]));
            }

            $q.all(initRequests).then(function() {

                var stateLinks = StateLinks(SETTINGS.BASIC_SRC);

                $stateProviderRef
                    .state('home', {
                        url: '^/',
                        templateUrl: 'home.html',
                        controller: 'homeController as home'
                    })
                    .state('pages', {
                        url: '^/{link:{|' + stateLinks.pages + '}i}',
                        templateUrl: 'page.html',
                        controller: 'pageController as page'
                    })
                    .state('products', {
                        url: '^/{link:{|' + stateLinks.products + '}i}',
                        templateUrl: 'product.html',
                        controller: 'productController as product'
                    })
                    .state('admin', {
                        url: '^/admin',
                        templateUrl: 'admin.html',
                        controller: 'adminController as admin'
                    })
                    .state('otherwise', {
                        url: '*path',
                        templateUrl: '404.html'
                    });

                $urlRouter.sync();

                return $stateProviderRef;

            });

            $urlRouter.listen();
        }
        
        //TODO: service should return function

        return provider;

    }
        
})();
