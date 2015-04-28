angular.module('app').controller('StudentTakeCourseInfoController', [ '$scope',  '$rootScope','CourseDataService', 'RandomDataGeneratorService', 'localStorageService', 'CONSTANTS', 'StudentService' , '$state', function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, localStorageService, CONSTANTS, StudentService, $state){ 
    
    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';


    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           console.log("here");
           console.log(data);
           $state.go('website-student.courses');
      });
    };

    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
            $scope.course = data;
	    });
    });      	 
}]);    
  