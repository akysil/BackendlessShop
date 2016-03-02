(function() {
    'use strict';

    angular
        .module('sls.admin')
        .factory('Data', Data);

    Data.$inject = ['$http', 'SETTINGS'];
    
    function Data($http, SETTINGS) {

       var dataBase = SETTINGS.API_DATA;
      var filesBase = SETTINGS.API_FILES;

        var methods = {
            //get: get,
            getTable: function(table) { return $http.get(dataBase + table); },
            getFiles: function(folder) { return $http.get(filesBase + folder); },
            add: add,
            update: update,
            remove: remove
        };
        
        //TODO: try to redefine methods

        return methods;

        // --------------------------------------------------------------------

        function add(data, table) {
            
            var config = {
                // headers in credentials
                method: 'POST',
                url: dataBase + table,
                data: data
            };

            return $http(config);
        }

        function update(data, table, objectId) {
            
            //angular.extend(data, { 'objectId': objectId });
            
            var config = {
                // headers in credentials
                method: 'PUT',
                url: dataBase + table + '/' + objectId,
                data: data
            };

            return $http(config);

        }

        function remove(table, objectId) {
            
            var config = {
                // headers in credentials
                method: 'DELETE',
                url: dataBase + table + '/' + objectId
            };

            return $http(config);

        }
        
        //TODO: update arguments sequence ( aka data -> table -> objectId) 

    }
        
})();
