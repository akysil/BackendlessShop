(function() {
    'use strict';

    angular
        .module('sls')
        .factory('SETTINGS', SETTINGS);

    function SETTINGS() {
        
        var settings = {

                  APPLICATION_ID: '1C32EF32-4F17-A809-FFFE-1E36794D9700',
                      SECRET_KEY: '1337A9EC-A9AF-638F-FF71-4AE60DA79D00',
                    CONTENT_TYPE: 'application/json',
                APPLICATION_TYPE: 'REST',
                         VERSION: 'v1',
                        API_BASE: 'https://api.backendless.com/',
                           TOKEN: '',
                   CACHE_TIMEOUT: 86400000, // 1 day in milliseconds
                   get API_USER() { return this.API_BASE + this.VERSION + '/users/'; },
                   get API_DATA() { return this.API_BASE + this.VERSION + '/data/'; }
                    
                    //get TOKEN() { return token; },
                    //set TOKEN(data) { token = data; }

                    //TODO: object with JSON sources: { label:url }

        };
        
        //TODO: convert properties to setters

        return settings;
        
    }
        
})();
