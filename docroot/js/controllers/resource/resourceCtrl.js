angular.module('app')

.controller('ResourceController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults', 
                         function(  $scope,   $filter,   $sce,   $rootScope ,  $timeout,   FilteredResults) {  

  var self = this;

  // Init event emitter
  FilteredResults.resultEvent();

  // Function subscribes to results change
  $scope.respondFilterChange = function(scope) {
    $scope.$on('resultChange', function(event, data){
      $timeout(function () {
        scope.$apply(function () {
          scope.items = data.results;
        });
      }) 
    });
  }

  // titleClick
  $scope.titleClick = function(event) {
    console.log(event);
  }

  // Gets stars from item
  $scope.getStars = function(item) {
    if(item.QualityRatingDescription == "Not Rated") {
      return "Not Rated";
    }
    var stars = parseInt(item.QualityRating),
        markup = '';
    
    for(var i = 0; i < 5; i++) {
      markup += '<i class="fa fa-star'; 
      markup += (i < stars) ? '' : '-o';
      markup += '"></i>';
    }
    return markup;
  }

  // Get help text
  $scope.getTypeHelp = function(item) {
    $text = '';
    switch(item.ProviderTypeDescription) {
      case 'Center':
        $text = "A non-residential facility providing care to children while parents are working or unavailable to care for their children.  Centers are licensed by the Mississippi Department of Health, meaning the center must adhere to state childcare regulations and ensure health and safety priorities.  Centers may voluntarily participate in MS' Quality Star program.  A higher star rating suggests higher quality program, which may include offering educational or development curriculum by trained staff.";
        break;

      case 'Group Home':
        $text = "A private residence in which two or more individuals provide child care services for 6 to 15 children who do not reside at the location.  Group homes are licensed by the state of Mississippi Department of Health,"
              + "meaning the center must adhere to state childcare regulations and ensure health and safety priorities.  Centers may voluntarily participate in MS' Quality Star program.  A higher star rating suggests higher quality program, which may include offering educational or development curriculum by trained staff.";
        break;

      case 'Non-relative in home':
        $text = "An individual who provides child care services in the child's own home but maintains a separate residence."
        break;

      case 'Non-relative out of home':
        $text = "A setting in which an individual is paid by parents for care for their children while they are working or unavailable.  This setting occurs in provider's home, providing small group care in a home-like environment for fewer than six children.  These homes are NOT licensed, monitored, or otherwise regulated by the Mississippi Department of Health. Minimal information is maintained about these programs by the Mississippi Department of Health to assist in emergency preparedness only. Registered Family Daycare Homes may choose to participate in the same quality evaluation program offered to Licensed Family Daycare Homes.";

        break;

      case 'Slot contractor':
        $text = "A child care center that participates in a public/private partnership to increase parental access to quality child care services.  Slot contractors receive subsidies and quality improvement funds from a lead agency to provide direct services.  These centers commit to achieving at least a 3 star rating and using a state-approved Child Assessment tool.";
        break;
  
    }

    return $text;
  }

}]);