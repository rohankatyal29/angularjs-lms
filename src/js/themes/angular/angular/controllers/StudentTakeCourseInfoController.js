angular.module('app').controller('StudentTakeCourseInfoController', [ '$scope',  '$rootScope','CourseDataService', 'RandomDataGeneratorService', 'localStorageService', 'CONSTANTS',function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, localStorageService, CONSTANTS){ 
    
    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    // $scope.personImagePicker = function(){
    //    return RandomDataGeneratorService.personImagePicker();
    // };
    
    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	     	console.log(data);  
            $scope.course = data;
	    });
    });      	 
}]);    
  