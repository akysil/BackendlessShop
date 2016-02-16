(function() {
    'use strict';

    angular
        .module('sls')
        .factory('DOM', DOM);

    DOM.$inject = [];
    
    function DOM() {

        var temp;

        var dom = {
            //get: get,
            get: function(table) { return $http.get(temp); }
        };

        return dom;

    }
        
})();
