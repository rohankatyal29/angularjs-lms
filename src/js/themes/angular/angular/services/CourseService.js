angular.module('app').service('CourseService', function ($http, $rootScope, HttpService, $q) {

    var courseData = new Object({});
    var dataFetched = false;
    var fetchedCourseId ='';

    var getAllCourses = function () {
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(courseData);
        } else{
            HttpService.get('/courses', {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": null
            }).then(function(data){
                    courseData = data;
                    deferred.resolve(courseData);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    return {
        getAllCourses : getAllCourses
    };

});
