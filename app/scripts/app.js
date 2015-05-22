'use strict';

/**
 * @ngdoc overview
 * @name foodcriticApp
 * @description
 * # foodcriticApp
 *
 * Main module of the application.
 */
angular
  .module('foodcriticApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
