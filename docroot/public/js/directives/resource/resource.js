
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

.directive('providerFilters', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'ProviderFilterController',
    templateUrl: 'public/views/resource/provider-filters.html',
    link: function($scope, $element, $attrs) {
      // Watch filtered ResultsCallbvac
      $scope.respondFilterChange($scope);
    }
  }
})

.directive('ratingFilters', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'RatingFilterController',
    templateUrl: 'public/views/resource/rating-filters.html',
    link: function($scope, $element, $attrs) {
      // Watch filtered ResultsCallbvac
      $scope.respondFilterChange($scope);
    }
  }
})

.directive('nameSearch', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'NameSearchController',
    templateUrl: 'public/views/resource/name-search.html',
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