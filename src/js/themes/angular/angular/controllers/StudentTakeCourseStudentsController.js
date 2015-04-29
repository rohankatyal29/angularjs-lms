angular.module('app').controller('StudentTakeCourseStudentsController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', 'StudentService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, StudentService) {
  
  $scope.students = {};

	$scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';
  
    var getCourseStudents = function(courseId){
    	CourseDataService.getCourseStudents(courseId).then(function(data){
 			      console.log("dataaatatata");
            console.log(courseId);
            console.log(data);
            $scope.students = data;
   		});
    };

    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };

      $scope.course = localStorageService.get('course');
 	    getCourseStudents(localStorageService.get('course').id);
   
}]);
    