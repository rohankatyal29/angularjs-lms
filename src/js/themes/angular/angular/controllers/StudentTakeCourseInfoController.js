angular.module('app').controller('StudentTakeCourseInfoController', [ '$scope',  '$rootScope','CourseDataService', 'RandomDataGeneratorService', 'localStorageService', function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, localStorageService){ 
    $scope.personImagePicker = function(){
       return RandomDataGeneratorService.personImagePicker();
    };
    
    $scope.$on('$viewContentLoaded', function(){
      $scope.course = localStorageService.get('course');
 	});     	 
}]);    
  