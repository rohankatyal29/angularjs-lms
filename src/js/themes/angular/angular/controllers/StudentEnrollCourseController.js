angular.module('app').controller('StudentEnrollCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService','$state','StudentService',function ($scope, $rootScope, CourseDataService, $http, localStorageService, $state, StudentService) {
			 
	$scope.user = localStorageService.get("user");
	$scope.fetchingUnregisteredCourses = true;   

	$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
	$scope.app.settings.bodyClass = '';

	$scope.enroll = function(courseId){
		CourseDataService.registerCourseForStudent($scope.user.id, courseId).then(function(data){
			$state.go($state.$current, null, { reload: true });
		});
	};

	  $scope.goToAnnouncement = function(courseId){
	    localStorageService.set('courseId', courseId);
	    $state.go('website-student.take-course-announcement');
	  };

	  $scope.goToDeadline = function(courseId){
	    localStorageService.set('courseId', courseId);
	    $state.go('website-student.take-course-deadlines');
	  };   


	// fetches all the courses not enrolled by the current user 
	$scope.unregisteredCourses = [];
	var getAllUnregisteredCourses = function(){
		$scope.fetchingUnregisteredCourses = true;  
		CourseDataService.getAllCourses().then(function(data){
			courses = data;
			StudentService.getStudentForId($scope.user.id).then(function(data){
				registeredCourses = data.courses;

				if(!registeredCourses){
					$scope.fetchingUnregisteredCourses = false;
					$scope.unregisteredCourses = courses;
					return;
				}

				courses.forEach(function(course){

					var id = course.id, flag = 0;
					registeredCourses.forEach(function(registeredCourse){

						if(id === registeredCourse.id){
							flag = 1;
						}
					});

					if(flag === 0){
						$scope.unregisteredCourses.push(course);
					}

				});

				$scope.fetchingUnregisteredCourses = false;

			
		});
		 
		});

		
	};


	$scope.recentAnnouncements = [];
	$scope.recentDeadlines = [];

    var getRecentUpdatesForStudent = function(){  
        StudentService.getStudentForId($scope.user.id).then(function(data){
    
          var registeredCourses = data.courses;

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
        });
      };

      var getRecentUpdatesForInstructor = function(){  
        InstructorService.getInstructorCourses($scope.user.id).then(function(data){
    
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
        });
      };



	$scope.$on('$viewContentLoaded', function(){   
		getAllUnregisteredCourses(); 
		if(($scope.user.role).localeCompare("student") === 0){
          getRecentUpdatesForStudent();
        }
        else {
          getRecentUpdatesForInstructor();
        }
    
	});     

	

}]); 
				
