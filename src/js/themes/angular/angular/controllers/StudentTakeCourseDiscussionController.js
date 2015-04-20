angular.module('app').controller('StudentTakeCourseDiscussionController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService) {
  
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
  