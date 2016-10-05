angular.module('app')

.controller('ResourceController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults', 
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

  // titleClick
  $scope.titleClick = function(event) {
    console.log(event);
  }

  // Gets stars from item
  $scope.getStars = function(item) {
    if(item.QualityRatingDescription == "Not Rated") {
      return "Not Rated";
    }
    var stars = parseInt(item.QualityRating),
        markup = '';
    
    for(var i = 0; i < 5; i++) {
      markup += '<i class="fa fa-star'; 
      markup += (i < stars) ? '' : '-o';
      markup += '"></i>';
    }
    return markup;
  }

}]);