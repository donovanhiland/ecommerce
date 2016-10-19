angular.module('ecommerceApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../views/mainTmpl.html'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: '../views/adminTmpl.html'
      })
      .state('cart', {
        url: '/cart',
        templateUrl: '../views/cartTmpl.html'
      });

  });
