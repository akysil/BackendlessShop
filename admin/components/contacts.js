(function() {
    'use strict';

    angular
        .module('sls')
        .directive('contacts', contacts);

    function contacts() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'contacts.html',
            link: linkFunc,
            controller: contactsController, // 'contactsController' if in separate file
            controllerAs: 'contacts'
        };

        return directive;

        function linkFunc(scope, element, attr, contacts) {
            //
        }
    }

    contactsController.$inject = ['$scope'];

    function contactsController($scope) {
        
        // as controllerAs
        /* jshint validthis: true */
        var contacts = this;        

        //
        
    }
    
})();
