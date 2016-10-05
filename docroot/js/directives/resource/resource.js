
'use strict';

angular.module('app')

.directive('resourceList', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'ResourceController',
    templateUrl: 'public/views/resource/list.html',
    link: function($scope, $element, $attrs) {
      // Watch filtered ResultsCallbvac
      $scope.respondFilterChange($scope);
    }
  }
})

.directive('resourceFilters', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'ProviderFilterController',
    templateUrl: 'public/views/resource/filters.html',
    link: function($scope, $element, $attrs) {
      // Watch filtered ResultsCallbvac
      $scope.respondFilterChange($scope);
    }
  }
})

.directive('resourceTeaser', function factory($window, $browser) {
  return {
    restrict: 'E',
    scope: {
     'item': '=',
    },
    controller: 'ResourceController',
    templateUrl: 'public/views/resource/teaser.html'
  }
})

.directive('resourceFull', function factory($window, $browser) {
  return {
    restrict: 'E',
    scope: {
     'item': '=',
    },
    controller: 'ResourceController',
    templateUrl: 'public/views/resource/full.html'
  }
});