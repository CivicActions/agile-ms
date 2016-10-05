'use strict';

//***************************************

// Main Application

//***************************************

angular.module('app', [
  'ui.bootstrap',
  'ngSanitize',
  'ngAnimate',
  'ngResource',
  'ngTouch',
  'rawService'
])

.run(
  [          '$rootScope', '$window', '$location', 
    function ($rootScope,   $window,   $location) {

      // Drupal API
      $rootScope.apiUrl = 'http://172.17.0.4';
      // Raw github url
      $rootScope.rawUrl = 'https://raw.githubusercontent.com/CivicActions/agile-ms/master/data/MS%20ITS%20RFP%203717-Vendor%20Challenge%20Dataset%20FINAL.json';
		
		}
	]
);

