(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope', 'Data'];
    
    function homeController($scope, Data) {
        
        // as controllerAs
        /* jshint validthis: true */
        var home = this;

        home.getCom = function() {

            Data.get('pages')

                .success(function (data, status, headers, config) {

                    console.log(data);
                    home.data = data.data;
                    
                })

                .error(function (error, status, headers, config) {
                    console.log(error);
                });

            //

        };

        home.addTextPage = function() {

            var data = {
                name: 'test',
                subject: 'Test',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            };

            Data.add(data, 'pages')

                .success(function (data, status, headers, config) {

                    console.log(data);
                    
                })

                .error(function (error, status, headers, config) {
                    console.log(error);
                });

            //fg

        };

        home.removeTextPage = function(objectId, table) {

            var data = {
                name: 'test',
                subject: 'Test',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            };

            Data.update(data, objectId, table)

                .success(function (data, status, headers, config) {

                    console.log(data);
                    
                })

                .error(function (error, status, headers, config) {
                    console.log(error);
                });

            //

        };


    }
        
})();
