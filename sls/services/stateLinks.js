(function() {
    'use strict';

    angular
        .module('sls')
        .factory('StateUrls', StateUrls);

    StateUrls.$inject = ['Cache'];
    
    function StateUrls(Cache) {
        
        return function(tables) {
            //console.log(tables);

            var stateUrls = {};

            getTable(tables);

            function getTable(tables) {
                for (var i = 0, len = tables.length; i < len; i++) {
                    stateUrls[tables[i]] = '';
                    getUrls(tables[i]);
                }
            }

            function getUrls(tableName) {
                var table = Cache.getCurrent[tableName] || [];
                for (var i = 0, len = table.length; i < len; i++) {
                    stateUrls[tableName] += (table[i].link) ? (table[i].link + '|') : '';
                }
            }

            return stateUrls;   
        };

    }

})();