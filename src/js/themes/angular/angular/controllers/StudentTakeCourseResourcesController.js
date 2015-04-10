angular.module('app').controller('StudentTakeCourseResourcesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', function ($scope, $rootScope, RandomDataGeneratorService) {
  
      $scope.personImagePicker = function(){
        return RandomDataGeneratorService.personImagePicker();
      };
       	 
    }]);
  