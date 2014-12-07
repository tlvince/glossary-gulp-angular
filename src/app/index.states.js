'use strict';

angular.module('glossaryGulpAngular')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('root', {
      abstract: true,
      views: {
        root: {
          templateUrl: 'app/index.html'
        }
      }
    })
    .state('index', {
      parent: 'root',
      abstract: true,
      views: {
        navbar: {
          templateUrl: 'components/navbar/navbar.html',
          controller: 'NavbarCtrl',
          controllerAs: 'navbarCtrl'
        },
        content: {}
      }
    });
  });
