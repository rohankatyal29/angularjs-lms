angular.module('app').controller('StudentTakeCourseDeadlinesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService','localStorageService' ,'$upload', 'CONSTANTS', '$state', 'StudentService' ,function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, $upload, CONSTANTS, $state, StudentService) {
    
    var assessmentId = "";

    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    $scope.base_download_url =  CONSTANTS.rest_url_cors_proxy;  

 	$scope.$watch('deadline.file', function () {
        $scope.uploadDeadline($scope.deadline.file);
    });

    $scope.$watch('solution.file', function () {
        $scope.uploadSolution($scope.solution.file);    
    });

    $scope.setAssessmentId = function(id){
        assessmentId = id;
    };

    $scope.uploadSolution = function (files) {
     if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {   
                var file = files[i];
                $upload.upload({
                    url: CONSTANTS.rest_url_cors_proxy + '/students/' + localStorageService.get("user").id.replace(/"/g , "") + '/deadline/' + assessmentId ,
                    headers:{
                        'Content-Type': 'multipart/mixed'
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    $state.go($state.current, {}, {reload: true});
                }).error(function(){
                    $state.go($state.current, {}, {reload: true});
                });  
            }
        }
    };

    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };

    $scope.uploadDeadline= function (files) {
        if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: CONSTANTS.rest_url_cors_proxy + '/instructors/' + localStorageService.get("user").id.replace(/"/g , "") + '/deadline/' + localStorageService.get("courseId").replace(/"/g , "") ,
                    headers:{
                        'Content-Type': 'multipart/mixed'
                    },
                    file: file,
                    params: {'deadline_time': $scope.deadline.date, 'deadline_title': $scope.deadline.title }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    $state.go($state.current, {}, {reload: true});
                }).error(function(){
                    $state.go($state.current, {}, {reload: true});
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
        $scope.deadline = {title: "", date: "", file: ""};
        $scope.solution = {file: ""};

    });     	 

}]);
  