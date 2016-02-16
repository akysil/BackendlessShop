(function() {
    'use strict';

    angular
        .module('sls')
        .factory('Cache', Cache);

    Cache.$inject = ['Data'];
    
    function Cache(Data) {

        var cache = {};
        
        return {
            get: function(table) {

                if (!cache[table]) {
                    Data.get(table).then(function(data) {
                        console.log('query for '+table);
                        cache[table] = data.data.data;
                    });
                }

                return cache[table];
            }
        };

        // --------------------------------------------------------------------

        
        
        //TODO: update arguments sequence ( aka Cache -> table -> objectId) 

    }
        
})();
