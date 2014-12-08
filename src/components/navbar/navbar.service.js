'use strict';

angular.module('glossaryGulpAngular')
  .service('navbarService', function($state) {
    this.get = function() {
      var states = $state.get();
      function hasLabel(state) {
        return !state.abstract && state.data && state.data.label;
      }
      function transpose(state) {
        return {
          name: state.name,
          label: state.data.label
        };
      }
      return states
        .filter(hasLabel)
        .map(transpose);
    };
  });
