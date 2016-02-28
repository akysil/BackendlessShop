(function() {
    'use strict';

    angular
        .module('sls')
        .run(run);

    run.$inject = ['StateConfig'];

    function run(StateConfig) {
        var stateConfig = StateConfig;
    }

})();
