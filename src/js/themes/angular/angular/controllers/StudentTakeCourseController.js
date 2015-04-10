angular.module('app').controller('StudentTakeCourseController', ['$scope', '$rootScope', 'RandomDataGeneratorService', function ($scope, $rootScope, RandomDataGeneratorService) {
  
      $scope.personImagePicker = function(){
        return RandomDataGeneratorService.personImagePicker();
      };
       	 
    }]);
  