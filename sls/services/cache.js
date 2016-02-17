(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Cache', Cache);

    Cache.$inject = ['$q', 'Data'];
    
    function Cache($q, Data) {

        var cache = {};

        function get(table) {
            if (!cache[table]) {
                Data.get(table).then(function(data) {
                    cache[table] = data.data.data;
                });
            }
            return cache[table] || $q.when(cache[table]);
        }
        
        return {
            get: get
        };

        // --------------------------------------------------------------------
        
        //TODO: update arguments sequence ( aka Cache -> table -> objectId) 

    }
        
})();
