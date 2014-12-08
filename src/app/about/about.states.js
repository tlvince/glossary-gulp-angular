'use strict';

angular.module('about')
  .config(function($stateProvider) {
    $stateProvider.state('about', {
      url: '/about',
      parent: 'index',
      templateUrl: 'app/about/about.html',
      data: {
        label: 'About'
      }
    });
  });
