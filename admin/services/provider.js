(function() {
    'use strict';

    angular
        .module('sls')
        .provider('Provider', Provider);

    Provider.$inject = [];
    
    function Provider() {

        var provider = {};
        
        provider.$get = function() {

            var service = {};

            service.name = 'Empty provider';

            return service;

        };

        return provider;

    }
        
})();