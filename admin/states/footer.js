(function() {
    'use strict';

    angular
        .module('sls')
        .controller('footerController', footerController);

    footerController.$inject = ['$scope'];

    function footerController($scope) {

        // as controllerAs
        /* jshint validthis: true */
        var footer = this;

    }

})();