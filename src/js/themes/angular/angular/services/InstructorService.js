angular.module('app').service('InstructorService', function ($http, $rootScope, HttpService, $q, RandomDataGeneratorService) {

    var instructorData = new Object({});
    var dataFetched = false;
    var instructor = new Object({});
    var courses = new Object({});

    var getAllInstructors = function () {
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(instructorData);
        } else{
            HttpService.get('/instructors', {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": null
            }).then(function(data){
                    instructorData = data;
                    deferred.resolve(instructorData);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getInstructorForId = function (instructorId) {
        var deferred = $q.defer();
        HttpService.get('/instructors/' + instructorId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                instructor = data;
                deferred.resolve(instructor);   
            });
        return deferred.promise;  
    };

    var getInstructorCourses = function (instructorId) {
        var deferred = $q.defer();
        HttpService.get('/instructors/' + instructorId.replace(/"/g , "") + '/courses',{      
            "data": null
        }, false, false, false).then(function(data){
                courses = data;
                if (courses){
                    courses.forEach(function(e){  
                        //TODO: set TA's, cover photo and instructors image
                        e.image = RandomDataGeneratorService.personImagePicker();
                        e.icon = RandomDataGeneratorService.courseIconPicker();
                        e.backgroundColor = RandomDataGeneratorService.courseBackgroundColorPicker();

                    });
                    
                }
                deferred.resolve(courses);   
            });
        return deferred.promise;  
    };

    var createNewAnnouncement = function (params, courseId, instructorId) {
        var deferred = $q.defer();
        HttpService.post('/instructors/' + instructorId + '/announcement/'+ courseId, params).then(function(response){
            deferred.resolve(response);
        });
        return deferred.promise;
    };


    return {
        getAllInstructors : getAllInstructors, 
        getInstructorForId: getInstructorForId, 
        createNewAnnouncement: createNewAnnouncement, 
        getInstructorCourses: getInstructorCourses
    };

});
