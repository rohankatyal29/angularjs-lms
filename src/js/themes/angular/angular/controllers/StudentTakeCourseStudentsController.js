angular.module('app').controller('StudentTakeCourseStudentsController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', 'StudentService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, StudentService) {
  
    var getAllStudentsData = function(){
    		StudentService.getAllStudents().then(function(data){
 				$scope.students = data;
   		});
    };

    $scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
    };

    $scope.$on('$viewContentLoaded', function(){
      $scope.course = localStorageService.get('course');
 	  getAllStudentsData();
 	});     	 

}]);
  