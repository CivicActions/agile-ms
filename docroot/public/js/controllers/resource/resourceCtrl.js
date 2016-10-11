angular.module('app')

.controller('ResourcesController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults', 
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
}])

.controller('ResourceItemController', ['$scope', '$filter', '$sce', '$rootScope', '$timeout', 'FilteredResults', 
                         function(  $scope,   $filter,   $sce,   $rootScope ,  $timeout,   FilteredResults) {  

  var self = this;

    // titleClick
  $scope.titleClick = function(event) {
    console.log(event);
  }

 /* $scope.itemProviderTitle = function(item) {
    return $rootScope.providerInfo[item.ProviderTypeDescription].title;
  }

  $scope.itemProviderClass = function(item) {
    return $rootScope.providerInfo[item.ProviderTypeDescription].class;
  }*/

  // Get help text
  // $scope.getStarHelp = function(item) {
  //   $text = '';
  //   switch(item.QualityRating) {
  //     case '0':
  //       $text = "This provider has not been reviewed by the state.";
  //       break;
  //     case '1':
  //       $text = "A star rating is received through an evaluation process by the state.  One star signifies that the facility has a current MS child care license and has registered for the Quality Star program.";
  //       break;
  //     case '2':
  //       $text = "A star rating is received through an evaluation process by the state.   Two stars signifies that: the center meets all the qualifications of a 1 star facility and has a administration policy handbook; director and teaching staff receive and document 20 and 15 hours of professional development by certified trainers annually; teachers use weekly lesson plans and learning centers (excluding infant room), and have received a minimum score of 3.00 on the Early Childhood or Infant/Toddler Environment Rating scale; the center has a bulletin board, quarterly newsletter and monthly calendar of activities and a documented annual parent-teacher conference; and the director completes and files a self-assessment with an improvement plan, and an annual signed staff evaluation.";
  //       break;
  //     case '3':
  //       $text = "A star rating is received through an evaluation process by the state.   Three stars signifies that: the center meets all the qualifications of a 2 star facility and the director has completed a Child Care as a business training and has an MOU with the service agency for themselves and all staff; Director holds a qualifying credential or childhood education-related degree, conducts monthly staff development meetings, one staff has a qualifying credential or childhood education-related degree, 18 hours of annual training for staff, plus an additional 10 hours annually of specialized age group training; Director is trained in MS Early Learning Guidelines; have received a minimum score of 3.60 on the Early Childhood or Infant/Toddler Environment Rating scale; weekly notes of activities distributed to parents, offers parent education and training activities annually; provides a parent/family lending library.";
  //       break;
  //     case '4':
  //       $text = "A star rating is received through an evaluation process by the state.   Four stars signifies that: the center meets all the qualifications of a 3 star facility and documentation and implementation of a professional development plan for staff; Director holds an associate’s degree or higher in Early Childhood Education or Childhood Development Technology; 15% of staff have a child development associate credential or higher degree; 20 hours of annual staff development training, plus an additional 10 hours of specialized age group training; all teaching staff trained to teach the MS Early Learning Guidelines for the age group they teach;  have received a minimum score of 4.10 on the Early Childhood or Infant/Toddler Environment Rating scale; parent/family volunteer program is implemented and documented; parent/family resource center is part of facility’s services; parent/family survey to rate performance of staff on file.";
  //       break;
  //     case '5':
  //       $text = "A star rating is received through an evaluation process by the state.   Five stars signifies that: the center meets all the qualifications of a 4 star facility and developmental checklist for each child is implemented and documented; there is a transition plan with local education agency for kindergarten; Director to peer mentoring on quality star program; Director holds bachelor’s degree or higher in Early Childhood Education, Early Childhood Special Education, Childhood Development, Elementary Education or related field; 25 % of full-time teachers have Child Development Associate credential or higher; 25 hours of annual training plus 10 hours in specialized age group; MS Early Learning Guidelines fully implemented in all classrooms; ongoing child assessments implemented and documented; have received a minimum score of 5.10 on the Early Childhood or Infant/Toddler Environment Rating scale; documentation showing that parent/teacher conferences conducted bi-annually; monthly newsletters to parents.";
  //       break;
  
  //   }
  //   return $text;
  // }

  // Get help text
  /*$scope.getProviderTypeHelp = function(item) {
    $text = '';
    switch(item.ProviderTypeDescription) {
      case 'Daycare Center':
        $text = "A non-residential facility providing care to children while parents are working or unavailable to care for their children.  Centers are licensed by the Mississippi Department of Health, meaning the center must adhere to state childcare regulations and ensure health and safety priorities.  Centers may voluntarily participate in MS' Quality Star program.  A higher star rating suggests higher quality program, which may include offering educational or development curriculum by trained staff.";
        break;

      case 'Licensed Home-based Daycare':
        $text = "A private residence in which two or more individuals provide child care services for 6 to 15 children who do not reside at the location.  Group homes are licensed by the state of Mississippi Department of Health,"
              + "meaning the center must adhere to state childcare regulations and ensure health and safety priorities.  Centers may voluntarily participate in MS' Quality Star program.  A higher star rating suggests higher quality program, which may include offering educational or development curriculum by trained staff.";
        break;

      case 'Nanny':
        $text = "An individual who provides child care services in the child's own home but maintains a separate residence."
        break;

      case 'Un-licensed Home-based Daycare':
        $text = "A setting in which an individual is paid by parents for care for their children while they are working or unavailable.  This setting occurs in provider's home, providing small group care in a home-like environment for fewer than six children.  These homes are NOT licensed, monitored, or otherwise regulated by the Mississippi Department of Health. Minimal information is maintained about these programs by the Mississippi Department of Health to assist in emergency preparedness only. Registered Family Daycare Homes may choose to participate in the same quality evaluation program offered to Licensed Family Daycare Homes.";

        break;

      case 'Relative In-Home':
        $text = "An individual who provides child care services in the child's own home but maintains a separate residence."
        break;

      case 'Relative Out-of-Home':
        $text = "A setting in which an individual is paid by parents for care for their children while they are working or unavailable.  This setting occurs in provider's home, providing small group care in a home-like environment for fewer than six children.  These homes are NOT licensed, monitored, or otherwise regulated by the Mississippi Department of Health. Minimal information is maintained about these programs by the Mississippi Department of Health to assist in emergency preparedness only. Registered Family Daycare Homes may choose to participate in the same quality evaluation program offered to Licensed Family Daycare Homes.";

        break;

      case 'Quality Star Participating Daycare Center':
        $text = "A child care center that participates in a public/private partnership to increase parental access to quality child care services.  Slot contractors receive subsidies and quality improvement funds from a lead agency to provide direct services.  These centers commit to achieving at least a 3 star rating and using a state-approved Child Assessment tool.";
        break;
  
    }
    return $text;
  }*/

}]);