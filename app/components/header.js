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

        function linkFunc(scope, element, attr, header) {
            //
        }
    }

    headerController.$inject = ['$scope', 'Storage', '$log', '$cacheFactory'];

    function headerController($scope, Storage, $log, $cacheFactory) {
        
        // as controllerAs
        /* jshint validthis: true */
        var header = this;        

        $scope.$watch(function() { return Storage.get(); }, function(newValue, oldValue) {
            
            if (newValue) header.nav = newValue;
            //console.log(header.nav);
            
        });


        var cache = $cacheFactory('cacheId');

        cache.put('key', 'value');
        cache.put('another key', 'another value');

        console.log(cache.get('key'));
        
    }
    
})();
