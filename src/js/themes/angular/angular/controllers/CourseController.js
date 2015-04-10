angular.module('app').controller('CourseController', ['$scope', '$rootScope',  'CourseService','RandomDataGeneratorService' ,function ($scope, $rootScope, CourseService, RandomDataGeneratorService) {
       	
	    var getAllCoursesData = function(){
	    		CourseService.getAllCourses().then(function(data){
     			$scope.courses = data;
       		});
	    };

	    $scope.courseIconPicker = function(){
        	return RandomDataGeneratorService.courseIconPicker();
        };

       	$scope.$on('$viewContentLoaded', function(){
       		getAllCoursesData();
       	});

       	 
    }]);
