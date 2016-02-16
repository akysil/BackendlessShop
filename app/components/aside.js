(function() {
    'use strict';

    angular
        .module('app')
        .directive('aside', aside);

    function aside() {
        var directive = {
            restrict: 'E',
            templateUrl: 'aside.html',
            link: linkFunc,
            controller: asideController, // 'asideController' if in separate file
            controllerAs: 'aside'
        };

        return directive;

        function linkFunc(scope, element, attr, aside) {
            //
        }
    }

    asideController.$inject = ['$scope', '$location'];

    function asideController($scope, $location) {
        
        // as controllerAs
        /* jshint validthis: true */
        var aside = this;
        

        //if ($location.path().indexOf('aside')) aside.show = true;
        

        //

        
    }
    
})();
