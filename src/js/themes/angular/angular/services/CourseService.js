angular.module('app').service('CourseDataService',['$http', '$rootScope', 'HttpService', '$q', function ($http, $rootScope, HttpService, $q) {

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
                    deferred.resolve(courses);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getCourseForID = function (courseId) {
        var deferred = $q.defer();
        HttpService.get('/courses/' + courseId, {
            "data": null
        }, false, false, false).then(function(data){
                course = data;
                deferred.resolve(course);
            });
        return deferred.promise;
    };

    var createNewCourse = function (data) {
        return HttpService.post('/courses', { "data": data });
    };

    return {
        getAllCourses : getAllCourses, 
        getCourseForID : getCourseForID,
        createNewCourse: createNewCourse
    };
      
}]);   
