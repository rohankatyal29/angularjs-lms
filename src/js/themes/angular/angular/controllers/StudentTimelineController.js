angular.module('app').controller('StudentTimelineController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService', 'StudentService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService, StudentService) {
  

    $scope.user = localStorageService.get("user");

	  $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    var getTimelineData = function(){ 
      StudentService.getStudentForId($scope.user.id).then(function(data){
        $scope.timelineUpdates = data.updates;
      });
    };

    $scope.$on('$viewContentLoaded', function(){  
      getTimelineData();
    });  


}]);
  