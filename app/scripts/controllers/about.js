'use strict';

/**
 * @ngdoc function
 * @name foodcriticApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the foodcriticApp
 */
angular.module('foodcriticApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
