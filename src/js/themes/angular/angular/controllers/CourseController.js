angular.module('app').controller('CourseController', ['$scope', '$rootScope',  'CourseDataService','RandomDataGeneratorService' ,'$cookies' ,'localStorageService',function ($scope, $rootScope, CourseService, RandomDataGeneratorService, $cookies, localStorageService) {
       
      $scope.courseIconPicker = function(){
        	return RandomDataGeneratorService.courseIconPicker();
      };

      //fetches all the functions from the API
      (function () {
        CourseService.getAllCourses().then(function(data){
           $scope.courses = data;
         });
      }());

      $scope.setCourseId = function(id){ 
        localStorageService.set('courseId', '0801e24080053ab5');
      };

      // create new course called by instructor
      // TODO: add description to this
      $scope.createNewCourse = function(){
        var data = { "name" : $scope.courseName,
          "domain" : $scope.domain,
          "credits" : $scope.credits,
          "overview" : $scope.overview  
        };
        
        CourseService.createNewCourse(data);

      };
}]); 
        
