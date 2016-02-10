(function() {
    'use strict';

    angular
        .module('app')
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

        function linkFunc(scope, el, attr, footer) {
            //
        }
    }

    footerController.$inject = ['$scope', '$location'];

    function footerController($scope, $location) {
        
        // as controllerAs
        /* jshint validthis: true */
        var footer = this;
        

        //if ($location.path().indexOf('footer')) footer.show = true;
        

        //

        
    }
    
})();
