'use strict';

angular.module('glossaryGulpAngular')
  .config(function($stateProvider) {
    $stateProvider.state('definition', {
      url: '/',
      parent: 'index',
      templateUrl: 'app/definitions/definitions.html',
      controller: 'DefinitionsCtrl',
      controllerAs: 'definitionsCtrl',
      resolve: {
        definitions: function(definitionService) {
          return definitionService.query();
        }
      },
      data: {
        label: 'Definitions'
      }
    });
  });
