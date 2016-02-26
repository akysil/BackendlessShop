(function() {
    'use strict';

    angular
        .module('sls')
        .factory('StateLinks', StateLinks);

    StateLinks.$inject = ['Cache'];
    
    function StateLinks(Cache) {
        
        return function(tables) {
            //console.log(tables);

            var stateLinks = {};

            getTable(tables);

            function getTable(tables) {
                for (var i = 0, len = tables.length; i < len; i++) {
                    stateLinks[tables[i]] = '';
                    getUrls(tables[i]);
                }
            }

            function getUrls(tableName) {
                var table = Cache.getCurrent[tableName] || [];
                for (var i = 0, len = table.length; i < len; i++) {
                    stateLinks[tableName] += (table[i].link) ? (table[i].link + '|') : '';
                }
            }

            return stateLinks;   
        };

    }

})();