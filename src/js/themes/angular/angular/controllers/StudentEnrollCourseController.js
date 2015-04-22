angular.module('app').controller('StudentEnrollCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService','$state',function ($scope, $rootScope, CourseDataService, $http, localStorageService, $state) {
       
      $scope.enroll = function(courseId){
        CourseDataService.registerCourseForStudent(localStorageService.get("currentUserId"), courseId).then(function(data){
          $state.go("website-courses.list");
        });
      };

      // fetches all the courses not enrolled by the current user 
      // TODO: Get only student specific courses
      var getAllUnregisteredCourses = function(){
        CourseDataService.getAllCourses().then(function(data){
          $scope.unregisteredCourses = data;  
        });
      };

      $scope.$on('$viewContentLoaded', function(){
        getAllUnregisteredCourses();     
      });     

  

}]); 
        
