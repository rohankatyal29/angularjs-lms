angular.module('app').controller('StudentsController', ['$scope', '$rootScope',  'StudentService', 'RandomDataGeneratorService', function ($scope, $rootScope, StudentService, RandomDataGeneratorService) {
       
      var getAllStudentsData = function(){
	    		 StudentService.getAllStudents().then(function(data){
     			  $scope.students = data;
       		});
	    };

      $scope.personImagePicker = function(){
        return RandomDataGeneratorService.personImagePicker();
      };

     	$scope.$on('$viewContentLoaded', function(){
        getAllStudentsData();
     	});
 
       	 
    }]);
  