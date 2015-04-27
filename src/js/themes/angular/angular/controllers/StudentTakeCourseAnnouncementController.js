angular.module('app').controller('StudentTakeCourseAnnouncementController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService', 'InstructorService', '$state',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService, InstructorService, $state) {
  

    $scope.user = localStorageService.get("user");

	  $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';


    $scope.addNewAnnouncement = function(){
      var params = new Object({});
      params = {"announcement_text": $scope.announcement.text, "announcement_title": $scope.announcement.title};
      InstructorService.createNewAnnouncement(params, localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
          $state.go($state.$current, null, { reload: true });
      });
      
    };   


    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	      $scope.announcement = {"text": "", "title": ""};
      });
    });       	 
}]);
  