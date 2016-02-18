(function() {
    'use strict';

    angular
        .module('sls')
        .config(config);

    config.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$urlMatcherFactoryProvider'];

    function config($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider, $urlMatcherFactoryProvider) {

        $httpProvider.interceptors.push('Credentials');
        $httpProvider.interceptors.push(function() {
            return {
                request: function(config) {
                    //console.log(config);
                    return config;
                }
            };
        });


var list = ['about', 'planting', 'payment', 'contacts'];
 
$urlMatcherFactoryProvider.type('listItem', {
  encode: function(item) {
    // Represent the list item in the URL using its corresponding index
    return item;
  },
  decode: function(item) {
    // Look up the list item by index
    return item;
  },
  is: function(item) {
    // Ensure the item is valid by checking to see that it appears
    // in the list
    return list.indexOf(item) > -1;
  }
});
 
$stateProvider.state('list', {
  url: "/list/{item:listItem}",
                templateUrl: "page.html",
  controller: function() {
    console.log('$stateParams.item');
    alert('hi');
  }
});

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "home.html"
            })
            .state('item', {
                url: "/item",
                templateUrl: "item.html"
            })
            .state('pages', {
                url: "/{item:listItem}",
                templateUrl: "page.html",
                controller: 'pageController as page'
            });

        $urlRouterProvider.otherwise('/');
        
        if (window.location.hostname === ('localhost' || 'cvetnik.com.ua')) $locationProvider.html5Mode(true);
    }


        
})();
