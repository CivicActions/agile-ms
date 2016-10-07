angular.module('app')

.controller('NameSearchController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults',
                         function(  $scope,   $filter,   $sce,   $rootScope ,  $timeout,   FilteredResults) {  

  var self = this;

  console.log('ummm');

  // Init event emitter
  FilteredResults.resultEvent();

  // Function subscribes to results change
  $scope.respondFilterChange = function(scope) {
    $scope.$on('resultChange', function(event, data){
      $timeout(function () {
        scope.$apply(function () {
           scope.results = data.results;
        });
      }) 
    });
  }

  $scope.nameSearchAction = function(event) {
    event.preventDefault();
    searchForName();
  }
}]);