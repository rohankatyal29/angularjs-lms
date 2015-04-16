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
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
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
        if(dataFetched){
            deferred.resolve(course);    
        } else{
            HttpService.get('/courses/' + courseId, {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": null
            }).then(function(data){
                    course = data;
                    deferred.resolve(course);
                });
            dataFetched = true;
        }
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
