angular.module('app').controller('StudentTakeCourseController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService) {
  
    
    $scope.user = localStorageService.get("user");
  
    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    $scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
    };

    // //set course cookie with current selected course
    // (function () {
    //     CourseDataService.getCourseForID(localStorageService.get('courseId')).then(function(data){ 
    //         localStorageService.set('course', data);
    //     });
    // }());  

    var getCourseData = function(id){ 
    CourseDataService.getCourseForID(id).then(function(data){
            localStorageService.set('course', data);
        });
    };

    $scope.$on('$viewContentLoaded', function(){
        getCourseData(localStorageService.get('courseId'));  
    });     
 
       	 
}]);  
   