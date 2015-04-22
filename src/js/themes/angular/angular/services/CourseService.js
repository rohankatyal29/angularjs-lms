angular.module('app').service('CourseDataService',['$http', '$rootScope', 'HttpService', '$q', 'RandomDataGeneratorService' ,function ($http, $rootScope, HttpService, $q, RandomDataGeneratorService) {

    var courses = new Object({});
    var dataFetched = false;
    var fetchedCourseId ='';
    var course = new Object({});

    var getAllCourses = function () {  
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(courses);
        } else{
            HttpService.get('/courses', {
                    "data": null
            }).then(function(data){
                    courses = data;
                    courses.forEach(function(e){
                        //TODO: set TA's, cover photo and instructors image
                        e.image = RandomDataGeneratorService.personImagePicker();
                        e.icon = RandomDataGeneratorService.courseIconPicker();
                        e.backgroundColor = RandomDataGeneratorService.courseBackgroundColorPicker();
                    });
                    deferred.resolve(courses);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getCourseForID = function (courseId) {
        var deferred = $q.defer();
        HttpService.get('/courses/' + courseId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                course = data;
                //TODO: add images for TA's inside the loop
                course.instructors.forEach(function(e){
                    e.image = RandomDataGeneratorService.personImagePicker();
                });
                course.coverImage = RandomDataGeneratorService.courseBackgroundImagePicker();
                deferred.resolve(course);   
            });
        return deferred.promise;  
    };

    var createNewCourse = function (data) {
        return HttpService.post('/courses', data);
    };


    var registerCourseForStudent = function(studentId, courseId){
        var deferred = $q.defer();
        HttpService.get('students/' + studentId.replace(/"/g, "") +'/addCourse/' + courseId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                deferred.resolve(course);   
            });
        return deferred.promise;  
    };
  
    return {
        getAllCourses: getAllCourses, 
        getCourseForID: getCourseForID,
        createNewCourse: createNewCourse, 
        registerCourseForStudent: registerCourseForStudent
    };
      
}]);   


