'use strict';

angular.module('glossaryGulpAngular')
  .controller('NavbarCtrl', function($scope, navbarService) {
    $scope.date = new Date();
    this.items = navbarService.get();
  });
