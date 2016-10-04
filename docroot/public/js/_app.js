'use strict';

//***************************************

// Main Application

//***************************************

angular.module('app', [
  'app.page',
  'app.node',
  'ui.router',
  'drupalService',
  'googleMap',
  'rawService',
  'scrollTo',
  'ui.bootstrap',
  'ngSanitize',
  'ngAnimate',
  'ngResource',
  'ngTouch'
])

.run(
  [          '$rootScope', '$state', '$stateParams', '$window', '$location', 
    function ($rootScope,   $state,   $stateParams,   $window,   $location) {

			// It's very handy to add references to $state and $stateParams to the $rootScope
			$rootScope.$state = $state;
			$rootScope.$stateParams = $stateParams;

      // Drupal API
      $rootScope.apiUrl = 'http://172.17.0.4';
      // Raw github url
      $rootScope.rawUrl = 'https://raw.githubusercontent.com/CivicActions/agile-ms/master/data/MS%20ITS%20RFP%203717-Vendor%20Challenge%20Dataset%20FINAL.json';
      // Apply meta data if available
      $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){

          // // Metatag info
          // // ---------------------------------

          // //If we have any incoming data
          // if(toState.data) {
          //   // Set title
          //   var title = (toState.data.title && toState.data.title.length)
          //             ? toState.data.title
          //             : '';

          //   metaInfo.setTitle(title);

          //   // set description
          //   var description = (toState.data.description && toState.data.description.length)
          //                   ? toState.data.description
          //                   : '';

          //   metaInfo.setMetaDescription(description);

          //   // set keywords
          //   var keywords = (toState.data.keywords && toState.data.keywords.length)
          //                ? toState.data.keywords
          //                : [];

          //   metaInfo.setMetaKeywords(keywords, toState.data.keywordAppend);
          // }
          // // we're coming from a state with meta info, reset
          // else if(fromState.data) {
          //   metaInfo.resetAll();
          // }
        }
      );

      $rootScope.$on('$stateChangeSuccess', 
        function(event, toState, toParams, fromState, fromParams){

          // // send tracking
          // if ($window.ga){
          //   $window.ga('send', 'pageview', { 
          //     page: $location.path(),
          //     title: toState.data && toState.data.title ? toState.data.title : 'DHSFlash!'
          //   });
          // }

          // first time, and are we changing the main / secondary route
          if(  fromState.name && fromState.name.length
            && (!toState.data  || !(toState.data && toState.data.skipScroll))) {

            // $rootScope.scrollTo('main');
          }
        }
      );
		
		}
	]
)

.config(
  [          '$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider,   $stateProvider,   $urlRouterProvider) {

      // // Set base meta info
      // metaInfoProvider.setBaseTitle('DHSFlash!');
      // metaInfoProvider.setBaseDescription('DHSFlash!');
      // metaInfoProvider.setBaseKeywords('DHSFlash!');

      // set location provider as regular urls
      // $locationProvider.html5Mode(true);
    }
  ]
);

