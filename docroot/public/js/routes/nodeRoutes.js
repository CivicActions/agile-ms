'use strict';

angular.module('app.node', [
  'ui.router'
])

.config(
  [ '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider
         
        // Base route handles getching data, sub-routing 
        .state("node", {
          url: "/node/:nid",
          template: '<div class="node node-{{type}}" ui-view></div>',
          resolve: {
            node: function($state, $stateParams, Node) {
              return Node.get({nid: $stateParams.nid}).$promise.then(function(data) {
                $stateParams.type = data.type[0].target_id;
                return data;
              });
            }
          },
          controller: function($scope, $rootScope, $state, node, metaInfo){
            $scope.node = node;
            $scope.type = node.type[0].target_id;

            // Set meta info
            metaInfo.setTitle(node.title[0].value);
            if(node.body && node.body[0].summary) {
              metaInfo.setMetaDescription(node.body[0].summary);
            }
            
            // Determine the appropriate sub-route
            $scope.$watch('node', function() {
              $rootScope.goSubRoute('node', $scope.type);
            });            
          }
        });
    }
  ]
)


