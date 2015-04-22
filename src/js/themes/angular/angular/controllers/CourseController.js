angular.module('app').controller('CourseController', ['$scope', '$rootScope',  'CourseDataService','RandomDataGeneratorService' ,'$http' ,'localStorageService',function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, $http, localStorageService) {
       
      // fetches all the courses not enrolled by the current user 
      // TODO: Get only student specific courses
      var getAllUnregisteredCourses = function(){
        CourseDataService.getAllCourses().then(function(data){
          $scope.unregisteredCourses = data;  
        });
      };


      //fetches all the courses from the API
      var getAllCourses = function(){  
        CourseDataService.getAllCourses().then(function(data){
          $scope.courses = data; 
        });
      };

      $scope.setCourseId = function(id){

        localStorageService.set('courseId', id);

        CourseDataService.getCourseForID(id).then(function(data){
          localStorageService.set("course", data); 
        });
   
      };   

      $scope.$on('$viewContentLoaded', function(){
        getAllCourses();
        getAllUnregisteredCourses();     
      });     



}]); 
        
