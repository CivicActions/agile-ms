angular.module('app')

.controller('ResourcesController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults', 
                         function(  $scope,   $filter,   $sce,   $rootScope ,  $timeout,   FilteredResults) {  

  var self = this;

  // Init event emitter
  FilteredResults.resultEvent();

  // Function subscribes to results change
  $scope.respondFilterChange = function(scope) {
    $scope.$on('resultChange', function(event, data){
      $timeout(function () {
        scope.$apply(function () {
          scope.items = data.results;
        });
      }) 
    });
  }
}]);