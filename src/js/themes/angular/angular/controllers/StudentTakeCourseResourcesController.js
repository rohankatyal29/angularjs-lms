angular.module('app').controller('StudentTakeCourseResourcesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', '$upload', 'CONSTANTS', '$state', 'StudentService' ,function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, $upload, CONSTANTS, $state, StudentService) {
  
    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

  
    // To upload solutions to deadlines
 	$scope.$watch('resource.files', function () {
        $scope.upload($scope.resource.files);  
    });

    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };


    $scope.upload = function (files) {
        if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {  
                var file = files[i];
                $upload.upload({
                    url: CONSTANTS.rest_url_cors_proxy + '/instructors/' + localStorageService.get("user").id.replace(/"/g , "") + '/course_material/' + localStorageService.get("course").id.replace(/"/g , ""),
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                     $state.go($state.$current, null, { reload: true });
                }).error(function(){
                     $state.go($state.$current, null, { reload: true });
                });
            }
        }
    };   

    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	     	$scope.courseMaterials = $scope.course.courseMaterials;
            $scope.base_download_url = CONSTANTS.rest_url_cors_proxy;
	    });
        $scope.resource = {files : ''};
    });  
 	 
}]);
    