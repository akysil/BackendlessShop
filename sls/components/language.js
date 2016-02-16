(function() {
    'use strict';

    angular
        .module('sls')
        .directive('language', language);

    function language() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'language.html',
            link: linkFunc,
            controller: languageController, // 'languageController' if in separate file
            controllerAs: 'language'
        };

        return directive;

        function linkFunc(scope, element, attr, language) {
            //
        }
    }

    languageController.$inject = ['$scope'];

    function languageController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var language = this;        

        //
        
    }
    
})();
