angular.module('app').controller('AddNewCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService', '$state', function ($scope, $rootScope, CourseDataService, $http, localStorageService, $state) {
       
      $scope.user = localStorageService.get("user");

      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';

      
      // create new course called by instructor
      $scope.createNewCourse = function(){
        
        var data = new Object({});
        
        data = { "name" : $scope.courseName,
          "domain" : $scope.domain,
          "credits" : String($scope.credits),
          "overview" : $scope.overview, 
          "description": $scope.description,
          "class_timings": ["Monday 11:30 - 13:00","Wednesday 10:00 - 11:30"], 
          "pre_requisites": ["Exposure to Economics","Exposure to accounting","Exposure to algebra and statistics","Sense of Curiosity"], 
          "evaluations": ["Quizzes: 25%","Assignments: 20%","Mid-term: 25%","End-term: 30%"], 
          "office_hours": ["Friday 16:00 - 17:00"],
          "textbooks": ["Corporate Finance, 2nd Edition, by Ivo Welch.","Corporate Finance, 9th Edition, by Ross, Westerfield & Jaffee.","Principles of Corporate Finance, 10th Edition, by Brealey, Myers & Allen."],
          "instructors": [localStorageService.get("user")] 
        };
      
        CourseDataService.createNewCourse(data, localStorageService.get("user").id).then(function(response){
          $scope.courseUploadIsSuccess = true;
          $state.go($state.$current, null, { reload: true });
        }).catch(function(){
          $state.go($state.$current, null, { reload: true });
        });
      };   

}]); 
        
