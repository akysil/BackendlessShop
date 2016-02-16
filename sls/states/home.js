(function() {
    'use strict';

    angular
        .module('sls')
        .controller('homeController', homeController);

    homeController.$inject = ['$scope'];

    function homeController($scope) {

        // as controllerAs
        /* jshint validthis: true */
        var home = this;

    }

})();