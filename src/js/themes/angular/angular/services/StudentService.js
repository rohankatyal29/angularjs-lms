angular.module('app').service('StudentService', function ($http, $rootScope, HttpService, $q) {

    var studentData = new Object({});
    var dataFetched = false;
    var fetchedStudentid ='';

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

    // var getAllStudents = function(){
    //     return [{name:'rohan', rollno: 2012086, emailid: 'rohan12086@iiitd.ac.in'},
    //             {name:'rohan', rollno: 2012086, emailid: 'rohan12086@iiitd.ac.in'},
    //             {name:'rohan', rollno: 2012086, emailid: 'rohan12086@iiitd.ac.in'},
    //             {name:'rohan', rollno: 2012086, emailid: 'rohan12086@iiitd.ac.in'}];
    // };
    // var getHistoricalData = function(contestid){
    //     return HttpService.cleanService(HttpService.get('historical-queries/tapp_noofentriesperweek', {
    //         inline: true,
    //         input_s1gro_contestid: contestid,
    //         "items-per-page": 1000,
    //         "time-dimension":"weekly",
    //         "appNamespace":"tapp",
    //         "relative-last-time":12
    //     }));


    return {
        getAllStudents : getAllStudents
    };

});
