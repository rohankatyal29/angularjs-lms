angular.module('app').service('LoginService',['$http', '$rootScope', 'HttpService', '$q',function ($http, $rootScope, HttpService, $q) {

    var user = new Object({});

    var checkCredentials = function (email, password) {
        var deferred = $q.defer();
        HttpService.get('/users/login', {  
            'email' : email
        }).then(function(data){
                user = data;
                deferred.resolve(user);     
            }, function(data){
                $rootScope.authMsg = true;
                $rootScope.loggingInProgress = false;
            });
        return deferred.promise;
        
    };
  
    return {
        checkCredentials : checkCredentials
    };
      
}]);   


