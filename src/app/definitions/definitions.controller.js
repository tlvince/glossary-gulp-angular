'use strict';

angular.module('definitions')
  .controller('DefinitionsCtrl', function(definitionService) {
    var vm = this;

    function bindResults(results) {
      vm.definitions = results;
    }

    definitionService.query()
      .success(bindResults);
  });
