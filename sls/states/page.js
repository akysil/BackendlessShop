
(function() {
    'use strict';

    angular
        .module('sls')
        .controller('pageController', pageController);

    pageController.$inject = ['$scope', '$stateParams', 'Cache'];
    
    function pageController($scope, $stateParams, Cache) {
        
        // as controllerAs
        /* jshint validthis: true */
        var page = this;

        $scope.$watch(getPages, function(newVal, oldVal) {

            if (!newVal.length) return false;
            for (var i = 0, j = newVal.length; i < j; i++) {
                if(newVal[i].link === $stateParams.link) {
                    page.content = newVal[i];
                    return true;
                }
            }

        });

        function getPages() {
            return Cache.getSync.pages;
        }
    }

})();
