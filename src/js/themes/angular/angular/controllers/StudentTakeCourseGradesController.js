angular.module('app').controller('StudentTakeCourseGradesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService) {
  
	$scope.user = localStorageService.get("user");

	$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';
  
    $scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
    };
	
   $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	    });
    });   

}]);
  