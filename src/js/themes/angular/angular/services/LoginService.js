angular.module('app').service('LoginService',['$http', '$rootScope', 'HttpService', '$q',function ($http, $rootScope, HttpService, $q) {

    var user = new Object({});

    var checkCredentials = function (username, password, email) {
        var deferred = $q.defer();
        HttpService.get('/students/login', {  
            'email' : email
        }).then(function(data){
                user = data;
                deferred.resolve(user);   
            });
        return deferred.promise;  
    };
  
    return {
        checkCredentials : checkCredentials
    };
      
}]);   


