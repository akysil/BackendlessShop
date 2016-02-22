
(function() {
    'use strict';

    angular
        .module('sls')
        .controller('pageController', pageController);

    pageController.$inject = ['$scope', '$rootScope', '$stateParams', 'Cache', 'Provider'];
    
    function pageController($scope, $rootScope, $stateParams, Cache, Provider) {
        
        // as controllerAs
        /* jshint validthis: true */
        var page = this;

        $scope.$watch(getPages, function(newVal, oldVal) {
            page.pages = newVal;
        });

        function getPages() {
            return Cache.getCurrent.pages;
        }
    }

})();
