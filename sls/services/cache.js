(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Cache', Cache);

    Cache.$inject = ['$q', 'Data', 'SETTINGS'];
    
    function Cache($q, Data, SETTINGS) {

        //if(!window.localStorage) window.localStorage = {};
        
        //if(!window.localStorage.cacheExpire || window.localStorage.cacheExpire < +new Date) {
            // clean up cache (excerpt basket)
        //    window.localStorage.cacheExpire = (+new Date) + SETTINGS.CACHE_TIMEOUT;
        //}

        var cache = {};
        
        return {
            get: get
        };

        function get(table, force) {
            var deferral = $q.defer();

            if (window.localStorage[table] && !force) {
                var data = JSON.parse(window.localStorage[table]);
                cache[table] = data;
                deferral.resolve(data);
            } else if (cache[table] && !force) {
                window.localStorage[table] = JSON.stringify(cache[table]);
                deferral.resolve(cache[table]);
            } else {
                Data.get(table).then(function(data) {
                    window.localStorage[table] = JSON.stringify(data.data.data);
                    cache[table] = data.data.data;
                    deferral.resolve(data.data.data);
                    console.log('query from cache');
                });
            }
            return deferral.promise;
        }

        // --------------------------------------------------------------------
        
        //TODO: update arguments sequence ( aka Cache -> table -> objectId) 

    }
        
})();