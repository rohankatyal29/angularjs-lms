angular.module('app').controller('StudentsController', ['$scope', '$rootScope',  'StudentService', 'RandomDataGeneratorService', function ($scope, $rootScope, StudentService, RandomDataGeneratorService) {
      
      $scope.user = localStorageService.get("user");

      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';
       
      var getAllStudentsData = function(){
	    		 StudentService.getAllStudents().then(function(data){
     			  $scope.students = data;
       		});
	    };

     	$scope.$on('$viewContentLoaded', function(){
        getAllStudentsData();
     	});
 
       	 
    }]);
  