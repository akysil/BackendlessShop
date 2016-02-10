(function() {
    'use strict';

    angular
        .module('app')
        .directive('header', header);

    function header() {
        var directive = {
            restrict: 'E',
            templateUrl: 'header.html',
            link: linkFunc,
            controller: headerController, // 'headerController' if in separate file
            controllerAs: 'header'
        };

        return directive;

        function linkFunc(scope, el, attr, header) {
            //
        }
    }

    headerController.$inject = ['$scope', '$location'];

    function headerController($scope, $location) {
        
        // as controllerAs
        /* jshint validthis: true */
        var header = this;
        

        //if ($location.path().indexOf('header')) header.show = true;
        

        //

        
    }
    
})();
