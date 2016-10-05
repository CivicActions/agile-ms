angular.module('app')

.controller('ProviderFilterController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults',
                         function(  $scope,   $filter,   $sce,   $rootScope ,  $timeout,   FilteredResults) {  

  var self = this;

  // Init event emitter
  FilteredResults.resultEvent();

  // Function subscribes to results change
  $scope.respondFilterChange = function(scope) {
    $scope.$on('resultChange', function(event, data){
      $timeout(function () {
        scope.$apply(function () {
          var filteredProviderTypes = [];

          // Loop over filtered data set and get unique set of types.
          for (var i=0; i<data.results.length; i++) {
            // Check if type is in providerType array.
            if (filteredProviderTypes.indexOf(data.results[i].ProviderTypeDescription) == -1) {
              filteredProviderTypes.push(data.results[i].ProviderTypeDescription);
            }
          }

           scope.providerTypes = filteredProviderTypes;

        });
      }) 
    });
  }
}]);