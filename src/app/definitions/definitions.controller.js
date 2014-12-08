'use strict';

angular.module('definitions')
  .controller('DefinitionsCtrl', function(definitions) {
    this.definitions = definitions.data;
  });
