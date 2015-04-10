angular.module('app').controller('StudentTakeCourseDiscussionController', ['$scope', '$rootScope', 'RandomDataGeneratorService', function ($scope, $rootScope, RandomDataGeneratorService) {
  
      $scope.personImagePicker = function(){
        return RandomDataGeneratorService.personImagePicker();
      };
       	 
    }]);
  