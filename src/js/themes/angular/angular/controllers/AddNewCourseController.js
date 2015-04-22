angular.module('app').controller('AddNewCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService',function ($scope, $rootScope, CourseDataService, $http, localStorageService) {
       
      
      // create new course called by instructor
      $scope.createNewCourse = function(){
        
        var data = new Object({});
        
        data = { "name" : $scope.courseName,
          "domain" : $scope.domain,
          "credits" : $scope.credits,
          "overview" : $scope.overview, 
          "description": $scope.description, 
          "instructors": [{"name": "Joe Smith", "department": $scope.domain, "email": "joe@emc.com"},{"name": "Mary Doe", "department": $scope.domain, "email": "mary@emc.com"}],
          "class_timings":["Monday 11:30 - 13:00","Wednesday 10:00 - 11:30"], 
          "pre_requisites":["Exposure to Economics","Exposure to accounting","Exposure to algebra and statistics","Sense of Curiosity"], 
          "evaluations":["Quizzes: 25%","Assignments: 20%","Mid-term: 25%","End-term: 30%"], 
          "office_hours":["Friday 16:00 - 17:00"],
          "textbooks":["Corporate Finance, 2nd Edition, by Ivo Welch.","Corporate Finance, 9th Edition, by Ross, Westerfield & Jaffee.","Principles of Corporate Finance, 10th Edition, by Brealey, Myers & Allen."]
        };
      

        CourseDataService.createNewCourse(data);   

      };   

      // $scope.$on('$viewContentLoaded', function(){
      //   alert("HERE");   
      // });     



}]); 
        
