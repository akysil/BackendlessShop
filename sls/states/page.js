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

        page.temp = $stateParams.link;

        //console.log(Cache.$get);
        //console.log(Provider.test);

    }
        
})();
