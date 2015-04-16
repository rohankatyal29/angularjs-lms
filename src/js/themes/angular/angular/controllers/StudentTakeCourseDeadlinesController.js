angular.module('app').controller('StudentTakeCourseDeadlinesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService','localStorageService' ,function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService) {
  
    $scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
    };

    $scope.$on('$viewContentLoaded', function(){
 		$scope.course = localStorageService.get('course');  
 	});        	 

}]);
  