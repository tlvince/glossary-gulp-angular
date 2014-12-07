'use strict';

angular.module('glossaryGulpAngular')
  .config(function($stateProvider) {
    $stateProvider.state('definition', {
      url: '/',
      parent: 'index',
      templateUrl: 'app/definitions/definitions.html',
      controller: 'DefinitionsCtrl',
      controllerAs: 'definitionsCtrl'
    });
  });
