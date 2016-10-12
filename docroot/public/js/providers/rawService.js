'use strict';

angular.module('rawService', [])

  .service('FilteredResults', function($rootScope){
    // Watch filteredResults Callback
    this.resultEvent = function(){
      filteredResults.onChangeCallback = function (results) {
        $rootScope.$broadcast('resultChange', {results: results});
      };
    }
  });