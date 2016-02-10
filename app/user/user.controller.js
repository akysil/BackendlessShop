(function() {
    'use strict';

    angular
        .module('app')
        .controller('userController', userController);

    userController.$inject = ['$scope', 'User', 'SETTINGS'];
    
    function userController($scope, User, SETTINGS) {
        
        // as controllerAs
        /* jshint validthis: true */
        var user = this;

        user.name = '';
        user.password = '';
        user.token = SETTINGS.TOKEN;

        user.do = userDo;
        user.checkIfValid = userCheckIfValid;


        function userDo(name, password) {

            User.user(name, password)

                .success(function (data, status, headers, config) {

                    console.log(data);
                    SETTINGS.TOKEN = data['user-token'];
                    console.log(SETTINGS.TOKEN);
                    user.token = SETTINGS.TOKEN;

                })
                .error(function (error, status, headers, config) {
                    console.log(error.code);
                });

        }

        function userCheckIfValid(token) {

            User.userIsValid(token)

                .success(function (data, status, headers, config) {

                    console.log(data);

                })
                .error(function (error, status, headers, config) {
                    console.log(error);
                });

        }

    }

})();
