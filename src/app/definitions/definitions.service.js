'use strict';

angular.module('definitions')
  .service('definitionService', function($http) {
    var gdocs = 'https://script.google.com/macros/s/AKfycbxoNbcYsh_4Eg7ZyoaVUPrQgyOeMpa_iKi_dtWKgYVH6ANctNPS/exec';

    function mapDefinitions(response) {
      function transpose(definition) {
        return {
          term: definition[0],
          definition: definition[1],
          comments: definition[2]
        };
      }
      return response.map(transpose);
    }

    this.query = function() {
      var options = {
        params: {
          callback: 'JSON_CALLBACK'
        },
        transformResponse: mapDefinitions
      };

      return $http.jsonp(gdocs, options);
    };
  });
