
'use strict';

angular.module('app')

.directive('ratingStars', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    scope: {
     'stars': '=',
    },
    template: '<span class="stars" ng-bind-html="getStars()"></span>',
    link: function($scope, $element, $attrs) {
      // Gets stars from item
      $scope.getStars = function() {
        var markup = '';
        if($scope.stars == "Not Rated" || $scope.stars == "0") {
          markup =  "Not Rated";
        }

        var stars = parseInt($scope.stars);
        
        for(var i = 0; i < stars; i++) {
          markup += '<i class="fa fa-star'; 
          markup += (i < stars) ? '' : '-o';
          markup += '"></i>';
        }
        return markup;
      }
    }
  }
})

.directive('resourceList', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'ResourcesController',
    templateUrl: 'public/views/resource/list.html',
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
    templateUrl: 'public/views/resource/teaser.html'
  }
})

.directive('providerFiltersLicensed', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'ProviderFilterController',
    templateUrl: 'public/views/resource/provider-filters-licensed.html',
    link: function($scope, $element, $attrs) {
      // Watch filtered ResultsCallbvac
      $scope.respondFilterChange($scope);
    }
  }
})

.directive('providerFiltersIndependent', function factory($window, $browser, $timeout) {
  return {
    restrict: 'E',
    controller: 'ProviderFilterController',
    templateUrl: 'public/views/resource/provider-filters-independent.html',
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
});