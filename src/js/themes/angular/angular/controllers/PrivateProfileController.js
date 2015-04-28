angular.module('app').controller('PrivateProfileController', ['$scope', '$rootScope',  'StudentService', 'RandomDataGeneratorService', 'InstructorService', 'localStorageService', '$state',function ($scope, $rootScope, StudentService, RandomDataGeneratorService, InstructorService, localStorageService, $state) {
      

      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';


      $scope.goToAnnouncement = function(courseId){
        localStorageService.set('courseId', courseId);
        $state.go('website-student.take-course-announcement');
      };

      $scope.goToDeadline = function(courseId){
        localStorageService.set('courseId', courseId);
        $state.go('website-student.take-course-deadlines');
      };   


      $scope.recentAnnouncements = [];
      $scope.recentDeadlines = [];


      var getRecentUpdatesForStudent = function(){  
        $scope.fetchingProfileData = true;
      	StudentService.getStudentForId(localStorageService.get("user").id).then(function(data){
          var registeredCourses = $scope.user.courses;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }

          });
          $scope.fetchingProfileData = false;
         });
      };  

      var getRecentUpdatesForInstructor = function(){  
      $scope.fetchingProfileData = true;
    	InstructorService.getInstructorCourses(localStorageService.get("user").id).then(function(data){
          var registeredCourses = data;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }
        	});
          $scope.fetchingProfileData = false;
          });
      };


      $scope.$on('$viewContentLoaded', function(){

      	StudentService.getStudentForId(localStorageService.get("user").id).then(function(data){
      		$scope.user = data;
      	});


        if((localStorageService.get("user").role).localeCompare("student") === 0){
          getRecentUpdatesForStudent();
        }
        else {
          getRecentUpdatesForInstructor();
        }

      });       
 
       	 
}]);
  