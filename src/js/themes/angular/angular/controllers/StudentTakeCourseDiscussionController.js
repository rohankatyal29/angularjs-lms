angular.module('app').controller('StudentTakeCourseDiscussionController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', 'StudentService' , '$state', function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, StudentService, $state) {
  
	$scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';


    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };



  	$scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	    });
    });  

}]);
  