angular.module('app').service('LoginService',['$http', '$rootScope', 'HttpService', '$q',function ($http, $rootScope, HttpService, $q) {

    var id = new Object({});

    var checkCredentials = function (username, password, email) {
        var deferred = $q.defer();
        HttpService.get('students/login', {  
            'email' : email
        }).then(function(data){
                console.log(data);
                id = data;
                deferred.resolve(id);   
            });
        return deferred.promise;  
    };
  
    return {
        checkCredentials : checkCredentials
    };
      
}]);   


