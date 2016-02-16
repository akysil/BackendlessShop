(function() {
    'use strict';

    angular
        .module('sls')
        .controller('itemController', itemController);

    itemController.$inject = ['$scope'];
    
    function itemController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var item = this;

    }
        
})();
