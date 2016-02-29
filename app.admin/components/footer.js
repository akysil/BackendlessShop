(function() {
    'use strict';

    angular
        .module('sls.admin')
        .directive('footer', footer);

    function footer() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'footer.html',
            link: linkFunc,
            controller: footerController, // 'footerController' if in separate file
            controllerAs: 'footer'
        };

        return directive;

        function linkFunc(scope, element, attr, footer) {
            //
        }
    }

    footerController.$inject = ['$scope'];

    function footerController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var footer = this;

        //

    }

    
})();
