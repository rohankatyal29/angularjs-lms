angular.module('app').controller('StudentTakeCourseDeadlinesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService','localStorageService' ,'$upload', 'CONSTANTS',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, $upload, CONSTANTS) {
  
    // $scope.personImagePicker = function(){
    // 	return RandomDataGeneratorService.personImagePicker();
    // };

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
                    url: CONSTANTS.rest_url+ 'courses/' + localStorageService.get("courseId").replace(/"/g , "") + '/deadline',
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

    $scope.$on('$viewContentLoaded', function(){  
        CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
            localStorageService.set("course", data); 
            $scope.course = data;
            $scope.deadlines = data.assessments;
            $scope.base_download_url = CONSTANTS.rest_url;
        });
    });     	 

}]);
  