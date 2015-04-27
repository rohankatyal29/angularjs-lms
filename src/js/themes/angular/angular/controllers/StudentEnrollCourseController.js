angular.module('app').controller('StudentEnrollCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService','$state','StudentService',function ($scope, $rootScope, CourseDataService, $http, localStorageService, $state, StudentService) {
			 
	$scope.user = localStorageService.get("user");

	$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
	$scope.app.settings.bodyClass = '';

	$scope.enroll = function(courseId){
		CourseDataService.registerCourseForStudent($scope.user.id, courseId).then(function(data){
			$state.go($state.$current, null, { reload: true });
		});
	};

	// fetches all the courses not enrolled by the current user 
	$scope.unregisteredCourses = [];
	var getAllUnregisteredCourses = function(){
		CourseDataService.getAllCourses().then(function(data){
			courses = data;
			StudentService.getStudentForId($scope.user.id).then(function(data){
				registeredCourses = data.courses;

				if(!registeredCourses){
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

		});
	

		});

	};

	$scope.$on('$viewContentLoaded', function(){
		getAllUnregisteredCourses();     
	});     

	

}]); 
				
