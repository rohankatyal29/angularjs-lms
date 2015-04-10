angular.module('app').controller('StudentTakeCourseAnnouncementController', ['$scope', '$rootScope', 'RandomDataGeneratorService', function ($scope, $rootScope, RandomDataGeneratorService) {
  
      $scope.personImagePicker = function(){
        return RandomDataGeneratorService.personImagePicker();
      };
       	 
    }]);
  