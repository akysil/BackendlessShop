(function() {
    'use strict';

    angular
        .module('sls.admin')
        .factory('Auth', Auth);

    Auth.$inject = ['$http', 'SETTINGS'];
    
    function Auth($http, SETTINGS) {

        var token;

        var methods = {
            login: login,
            loginIsValid: loginIsValid
        };        

        return methods;

        function login(name, password) {

            var loginConfig = {
                // headers in interceptor
                method: 'POST',
                url: SETTINGS.API_BASE + SETTINGS.VERSION + '/Auths/login',
                data: angular.toJson({ login: name, password: password })
            };

            return $http(loginConfig);
        }

        function loginIsValid(token) {

            var loginConfig = {
                // headers in interceptor
                method: 'GET',
                url: SETTINGS.API_BASE + SETTINGS.VERSION + '/Auths/isvalidAuthtoken/' + token
            };

            return $http(loginConfig);
        }

    }
        
})();
