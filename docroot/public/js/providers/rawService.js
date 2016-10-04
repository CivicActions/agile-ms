'use strict';

angular.module('rawService', ['ngResource'])

  .factory('RawPath', ['$resource', '$rootScope', function ($resource, $rootScope) {
    console.log($rootScope.rawUrl);
    return $resource($rootScope.rawUrl, 
      { },
      {
        get: {
          method:'GET',
          cache: true,
          isArray: true
        },
        transformRequest: function(data, headersGetter) {
          headersGetter()['Accept'] = 'application/hal+json';
        }
      }
    );
  }]);
