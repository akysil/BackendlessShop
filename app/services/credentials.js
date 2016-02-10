(function() {
    'use strict';

    angular
        .module('app')
        .factory('Credentials', Credentials);

    Credentials.$inject = ['$q', 'SETTINGS'];
    
    function Credentials($q, SETTINGS) {

        return {
            request: function(config) {

                config.headers = config.headers || {};
                if (SETTINGS.TOKEN) config.headers['user-token'] = SETTINGS.TOKEN;
                
                angular.extend(config.headers, {
                   'application-id': SETTINGS.APPLICATION_ID,
                   'secret-key': SETTINGS.SECRET_KEY,
                   'Content-Type': SETTINGS.CONTENT_TYPE,
                   'application-type': SETTINGS.APPLICATION_TYPE
                });

                return config;
                //return config || $q.when(config);
            }
        };

    }
        
})();