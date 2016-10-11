angular.module('app')

.controller('RatingFilterController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults',
                         function(  $scope,   $filter,   $sce,   $rootScope ,  $timeout,   FilteredResults) {  

  var self = this;

  // Init event emitter
  FilteredResults.resultEvent();

  // Function subscribes to results change
  $scope.respondFilterChange = function(scope) {
    $scope.$on('resultChange', function(event, data){
      $timeout(function () {
        scope.$apply(function () {
          var ratingTypes = [];

          var keys = Object.keys($rootScope.ratingInfo);
          for (var i = 0; i < keys.length; i++) {
            ratingTypes.push($rootScope.ratingInfo[keys[i]]);
          };
          scope.ratings = ratingTypes;
        });
      }) 
    });
  }

  $scope.filterClick = function(event, filterType, value) {
    event.preventDefault();
    var filters = {};
    filters[filterType] = [];
    // Get active items if applicable
    if(filteredResults.activeFilters[filterType]) {
      filters[filterType] = filteredResults.activeFilters[filterType]
    }
    // Already active ?
    var index = filters[filterType].indexOf(value);
    if(index !== -1) {
      filters = filters[filterType].splice(index, 1);
    }
    else {
      filters[filterType].push(value);
    }
    filteredResults.setFilters(filters);
  };

  $scope.filterActive = function(filterType, value) {
    if(filteredResults.activeFilters[filterType] && filteredResults.activeFilters[filterType].indexOf(value) !== -1) {
      return true;
    }
    return false;
  }

}]);