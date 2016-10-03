
'use strict';

angular.module('app')

.directive('resourceList', function factory($window, $browser) {
  return {
    restrict: 'E',
    scope: {
     'items': '=',
    },
    templateUrl: 'public/views/resource/list.html',
    link: function($scope, $element, $attrs) {
      console.log($scope);
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