angular.module('app').controller('StudentTakeCourseInfoController', [ '$scope',  '$rootScope','CourseDataService', 'RandomDataGeneratorService', 'localStorageService', 'CONSTANTS',function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, localStorageService, CONSTANTS){ 
    
    $scope.personImagePicker = function(){
       return RandomDataGeneratorService.personImagePicker();
    };
    
    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	     	$scope.course = data;
	    	console.log(CONSTANTS.url);
	    });
    });      	 
}]);    
  