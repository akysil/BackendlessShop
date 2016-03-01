(function() {
    'use strict';

    angular
        .module('sls.admin')
        .directive('ngSize', ngSize);

    function ngSize() {
        
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                attr.$observe('ngSize', function setSize(value) {
                    attr.$set('size', attr.ngSize);
                });
            }
        };
    }

    
})();
