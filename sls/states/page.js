(function() {
    'use strict';

    angular
        .module('sls')
        .controller('pageController', pageController);

    pageController.$inject = ['$scope', '$rootScope'];
    
    function pageController($scope, $rootScope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var page = this;

        $scope.$on('$viewContentLoaded', 
        function(event, unfoundState, fromState, fromParams){ 
            console.log(event);
        });

    }
        
})();
