angular.module('app').controller('StudentTakeCourseDeadlinesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService','localStorageService' ,'$upload',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, $upload) {
  
    $scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
    };

    $scope.$on('$viewContentLoaded', function(){
 		$scope.course = localStorageService.get('course');  
 	});

    // To upload solutions to deadlines
 	$scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (files) {
        if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {  
                var file = files[i];
                $upload.upload({
                    url: 'http://10.31.169.169:8080/lms/api/courses/' + localStorageService.get("courseId").replace("\"","").replace("\"","") + '/course_material',
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);  
                });
            }
        }
    };       	 

}]);
  