(function() {
    'use strict';

    angular
        .module('sls')
        .controller('adminController', adminController);

    adminController.$inject = ['$state', 'Data'];
    
    function adminController($state, Data) {
        
        // as controllerAs
        /* jshint validthis: true */
        var admin = this;

        Data.get('products').then(function(data) {
            admin.list = data.data.data;
            console.log(admin.list);
        });

    }
        
})();