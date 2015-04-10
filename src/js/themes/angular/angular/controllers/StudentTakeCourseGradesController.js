angular.module('app').controller('StudentTakeCourseGradesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', function ($scope, $rootScope, RandomDataGeneratorService) {
  
      $scope.personImagePicker = function(){
        return RandomDataGeneratorService.personImagePicker();
      };
       	 
    }]);
  