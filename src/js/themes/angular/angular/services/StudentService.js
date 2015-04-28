angular.module('app').service('StudentService', function ($http, $rootScope, HttpService, $q, RandomDataGeneratorService) {

    var studentData = new Object({});
    var dataFetched = false;
    var fetchedStudentid ='';
    var student = new Object({});

    var getAllStudents = function () {
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(studentData);
        } else{
            HttpService.get('/students', {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": null
            }).then(function(data){
                    studentData = data;
                    deferred.resolve(studentData);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getStudentForId = function (studentId) {
        var deferred = $q.defer();
        HttpService.get('/students/' + studentId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                student = data;
                if (student){
                    student.personImage = RandomDataGeneratorService.personImagePicker();
                    student.courses.forEach(function(e){  
                        //TODO: set TA's, cover photo and instructors image
                        e.image = RandomDataGeneratorService.personImagePicker();
                        e.icon = RandomDataGeneratorService.courseIconPicker();
                        e.backgroundColor = RandomDataGeneratorService.courseBackgroundColorPicker();

                    });
                
                }
                deferred.resolve(student);   
            });
        return deferred.promise;  
    };

    var leaveCourse = function(courseId, studentId){
        var deferred = $q.defer();
        HttpService.get('/students/' + studentId.replace(/"/g , "") + '/removeCourse/' + courseId.replace(/"/g, ""), {  
            "data": null
        }, false, false, false).then(function(data){
                deferred.resolve(data);   
            });
        return deferred.promise;  
    };

    return {
        getAllStudents : getAllStudents, 
        getStudentForId: getStudentForId, 
        leaveCourse: leaveCourse
    };

});
