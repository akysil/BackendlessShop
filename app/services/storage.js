(function() {
    'use strict';

    angular
        .module('app')
        .factory('Storage', Storage);

    Storage.$inject = ['$timeout', 'Data'];
    
    function Storage($timeout, Data) {

        var staticPages;

        var methods = {
            get staticPages() { return staticPages || getStaticPages(); }
        };

        return methods;

        // --------------------------------------------------------------------

        function getStaticPages() {

            var content, sourceTable = 'pages';

            if (content) return content;

            Data.get(sourceTable)
            .then(success, error);

            return content;

            function success(data) {
                console.log(sourceTable + ': ' + data.status);
                content = data.data.data;
            }

            function error(data) {
                console.warn(sourceTable + ': ' + data.status);
                $timeout(function() {
                    getStaticPages();
                }, 1000);
            }

        }

    }
        
})();
