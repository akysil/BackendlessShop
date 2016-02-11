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

    headerController.$inject = ['$scope', 'Storage', '$log'];

    function headerController($scope, Storage, $log) {
        
        // as controllerAs
        /* jshint validthis: true */
        var header = this;        

        $scope.$watch(function() { return Storage.get(); }, function(newValue, oldValue) {
            
            if (newValue) header.nav = newValue;
            console.log(header.nav);
            
        });
        
    }
    
})();
