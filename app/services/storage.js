(function() {
    'use strict';

    angular
        .module('app')
        .factory('Storage', Storage);

    Storage.$inject = ['$timeout', 'Data'];
    
    function Storage($timeout, Data) {

        var storage;

        var methods = {
            get: function() { return storage; },
            
            //get get() { return storage; },
            //set update(options) { update(options); }
        };

        getStorage();

        return methods;

        // --------------------------------------------------------------------

        function getStorage() {

            Data.get('pages')
            .then(success, error);

            function success(data) {
                //console.log(data.status);
                storage = data.data.data;
            }

            function error(data) {
                console.warn(data.status);
                $timeout(function() {
                    getstorage();
                }, 1000);
            }

        }

    }
        
})();
