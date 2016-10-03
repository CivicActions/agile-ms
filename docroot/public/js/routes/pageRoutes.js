'use strict';

angular.module('app.page', [
  'ui.router',
])

.config(
  [          '$stateProvider', '$urlRouterProvider',
    function ($stateProvider,   $urlRouterProvider) {

      $stateProvider

        .state("home", {
          url: "/",
          abstract: true,
          template: '<div ui-view=""></div>',
          resolve: {
            data: function($state, $stateParams, RawPath) {
              return RawPath.get({}).$promise.then(function(data) {
                return data.map(function(item, key) {
                  item.id = key;
                  return item;
                } );
              });
            }
          }
        })

        .state("home.list", {
          url: "list",
          data: { 
            title: 'Home',                 // Sets meta title
            skipScroll: false               // Skips scroll animation (embedded ui-views)
          },
          templateUrl: 'public/views/home.html',
          controller: function($scope, $rootScope, $state, data){
            console.log(data);
            $scope.data = data;
          }
        })

        .state("home.resource", {
          url: "resource/:resourceID",
          data: { 
            title: 'Resource',              // Sets meta title
            skipScroll: false               // Skips scroll animation (embedded ui-views)
          },
          templateUrl: 'public/views/single-page.html',
          resolve: {
            item: function($state, $stateParams, data) {
              return data.filter(function(item) {
                return item.id === parseInt($stateParams.resourceID);
              } );
            }
          },
          controller: function($scope, $rootScope, $state, item){
            $scope.item = item.pop();
          }
        })

    }
  ]
);
