(function() {
    'use strict';

    angular
        .module('app')
        .controller('textController', textController);

    textController.$inject = ['$scope'];
    
    function textController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var text = this;

    }
        
})();
