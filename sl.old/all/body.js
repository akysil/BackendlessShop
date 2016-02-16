(function() {
    'use strict';

    angular
        .module('sls')
        .directive('body', body);

    body.$inject = ['$compile'];

    function body($compile) {
        
        var directive = {
            restrict: 'E',
            //replace: false,
            //transclude: true,
            //templateUrl: '/sls/all/body.html',
            link: linkFunc,
            controller: bodyController, // 'bodyController' if in separate file
            controllerAs: 'body'
        };

        return directive;

        function linkFunc(scope, element, attr, body, transclude) {

            var basicTemplate = '<header></header><aside></aside><main></main><footer></footer>';
            
            element.prepend($compile(basicTemplate.toString())(scope));

        }
    }

    bodyController.$inject = ['$scope'];

    function bodyController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var body = this;

        //
        
    }
    
})();
