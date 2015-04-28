angular.module('app').controller('LoginController', ['$scope', '$http', '$state', '$rootScope', '$q', 'HttpService', '$log', 'localStorageService', 'CONSTANTS', 'LoginService', function ($scope, $http, $state, $rootScope, $q, HttpService, $log, localStorageService, CONSTANTS, LoginService) {


    $scope.user = localStorageService.get("user");

    $scope.app.settings.bodyClass = 'login';
    $scope.app.settings.htmlClass = $rootScope.htmlClass.websiteLogin;


    $scope.login = function(){
        $rootScope.loggingInProgress = true;
        LoginService.checkCredentials($scope.email, $scope.password).then(function(responses){
    
            $rootScope.loggingInProgress = false;
            $rootScope.authMsg = false;
            localStorageService.set("user", responses);
            $state.go("website-student.courses");
           
        });
    };    

}]);