'use strict';

//***************************************

// Main Application

//***************************************

angular.module('app', [
  'ui.bootstrap',
  'ngSanitize',
  'ngTouch',
  'rawService'
])

.run(
  [          '$rootScope', '$window', '$location', 
    function ($rootScope,   $window,   $location) {
		  
      // Rating information
      $rootScope.ratingInfo = {
        'Low': {
          title: 'Low',
          stars: 1
        },
        'Average': {
          title: 'Average',
          stars: 2
        },
        'Good': {
          title: 'Good',
          stars: 3
        },
        'Very Good': {
          title:  'Very Good',
          stars: 4
        },
        'Excellent': {
          title: 'Excellent',
          stars: 5
        },
        'Not Rated': {
          title: 'Not Rated',
          stars: 'Not Rated'
        }
      };

      // Provider type information
      $rootScope.providerInfo = {
        'Center': {
          key: 'Center',
          title: 'Daycare Center',
          category: 'Licensed',
          filterTitle: 'Daycare Centers',
          class: 'provider-lic-day',
          desc: 'Daycare Centers are non-residential facilities providing care to children while parents are working or unavailable to care for their children.'
        },
        'Group Home': {
          key: 'Group Home',
          title: 'Licensed Home-based Daycare',
          category: 'Licensed',
          filterTitle: 'Licensed Home-based Daycare',
          class: 'provider-lic-home-based-day',
          desc: 'A private residence in which two or more individuals provide child care services for 6 to 15 children who do not reside at the location.'
        },
        'Slot Contractor': {
          key: 'Slot Contractor',
          title: 'Quality Star Participating Daycare Center',
          category: 'Licensed',
          filterTitle: 'Quality Star Participating Daycare Centers',
          class: 'provider-quality-star-day',
          desc: 'Child care centers that participates in a public/private partnership to increase parental access to quality child care services.'
        },
        'Non-Relative In-Home': {
          key: 'Non-Relative In-Home',
          title: 'Nanny',
          category: 'Independent',
          filterTitle: 'Nannies',
          class: 'provider-nanny',
          desc: 'An individual who provides child care services in the child\'s own home but maintains a separate residence.'
        },
        'Non-Relative Out-of-Home': {
          key: 'Non-Relative Out-of-Home',
          title: 'Un-licensed Home-based Daycare',
          category: 'Independent',
          filterTitle: 'Un-licensed Home-based Daycare',
          class: 'provider-un-home-based-day',
          desc: 'This setting occurs in provider\'s home, providing small group care in a home-like environment for fewer than six children.'
        },
        'Relative In-Home': {
          key: 'Relative In-Home',
          title: 'Relative In-Home',
          filterTitle: '',
          class: 'provider-rel-in-home',
          desc: 'An individual who provides child care services in the child\'s own home but maintains a separate residence.'
        },
        'Relative Out-of-Home': {
          key: 'Relative Out-of-Home',
          title: 'Relative Out-of-Home',
          filterTitle: '',
          class: 'provider-rel-out-home',
          desc: 'A setting in which an individual is paid by parents for care for their children while they are working or unavailable.  This setting occurs in provider\'s home, providing small group care in a home-like environment for fewer than six children.  These homes are NOT licensed, monitored, or otherwise regulated by the Mississippi Department of Health. Minimal information is maintained about these programs by the Mississippi Department of Health to assist in emergency preparedness only. Registered Family Daycare Homes may choose to participate in the same quality evaluation program offered to Licensed Family Daycare Homes.'
        }
      }

      $rootScope.providerInfoTitle = function(key) {
        if ($rootScope.providerInfo[key]) {
          return $rootScope.providerInfo[key].title;
        }
      }

      $rootScope.providerInfoClass = function(key) {
        if ($rootScope.providerInfo[key]) {
          return $rootScope.providerInfo[key].class;
        }
      }

      $rootScope.providerInfoDesc = function(key) {
        if ($rootScope.providerInfo[key]) {
          return $rootScope.providerInfo[key].desc;
        }
      }
    }
	]
);

