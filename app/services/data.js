(function() {
    'use strict';

    angular
        .module('app')
        .factory('Data', Data);

    Data.$inject = ['$http', 'SETTINGS'];
    
    function Data($http, SETTINGS) {

        var baseUrl = SETTINGS.API_DATA;

        var methods = {
            get: get,
            add: add,
            update: update,
            remove: remove
        };
        
        //TODO: try to redefine methods

        return methods;

        // Functions //////////////////////////////////////////////////////////

        function get(table) {

            var config = {
                // headers in credentials
                method: 'GET',
                url: baseUrl + table
            };

            return $http(config);
        }

        function add(data, table) {
            
            var config = {
                // headers in credentials
                method: 'POST',
                url: baseUrl + table,
                data: data
            };

            return $http(config);
        }

        function update(data, objectId, table) {
            
            angular.extend(data, {
               'objectId': objectId
            });
            
            var config = {
                // headers in credentials
                method: 'PUT',
                url: baseUrl + table + '/' + objectId,
                data: data
            };

            return $http(config);

        }

        function remove(objectId, table) {
            
            var config = {
                // headers in credentials
                method: 'DELETE',
                url: baseUrl + table + '/' + objectId
            };

            return $http(config);

        }
        
        //TODO: update arguments sequence ( aka data -> table -> objectId) 

    }
        
})();
