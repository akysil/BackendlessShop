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

        service.$inject = ['$urlRouter', '$q', 'SETTINGS', 'Cache', 'StateUrls'];

        function service($urlRouter, $q, SETTINGS, Cache, StateUrls) {
            
            var initRequests = [];

            for (var i = 0; i < SETTINGS.BASIC_SRC.length; i++) {
                initRequests.push(Cache.get(SETTINGS.BASIC_SRC[i]));
            }

            $q.all(initRequests).then(function() {

                var stateUrls = StateUrls(SETTINGS.BASIC_SRC);

                $stateProviderRef
                    .state('home', {
                        url: '^/',
                        templateUrl: 'home.html'
                    })
                    .state('pages', {
                        url: '^/pages/{link:{|' + stateUrls.pages + '}i}',
                        templateUrl: 'page.html',
                        controller: 'pageController as page',
                        params:  {
                            link: {
                                squash: false
                            }
                        }
                    })
                    .state('item', {
                        url: '^/item',
                        templateUrl: 'item.html'
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
