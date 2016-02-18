(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Cache', Cache);

    Cache.$inject = ['$q', 'Data'];
    
    function Cache($q, Data) {

        var cache = {};
        
        return {
            get: get
        };

        function get(table, force) {
            var deferral = $q.defer();
            if (cache[table] && !force) {
                deferral.resolve(cache[table]);
            } else {
                Data.get(table).then(function(data) {
                    cache[table] = data.data.data;
                    deferral.resolve(cache[table]);
                });
            }
            return deferral.promise;
        }

        // --------------------------------------------------------------------
        
        //TODO: update arguments sequence ( aka Cache -> table -> objectId) 

    }
        
})();
