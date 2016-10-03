angular.module('app')

.controller('ResourceController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 
                         function($scope,   $filter,   $sce,   $rootScope ,  $timeout) {  

  var self = this;

  $scope.titleClick = function(event) {
    console.log(event);
  }

}]);