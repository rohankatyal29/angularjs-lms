angular.module('app').controller('StudentTakeCourseAnnouncementController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService', function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService) {
  
  	$scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
  	};

    $scope.$on('$viewContentLoaded', function(){
      $scope.course = localStorageService.get('course');
 	  }); 
         	 
}]);
  