(function(){
    'use strict';

    angular.module('app', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.utils',
        'ui.jq',
        'ngCookies', 
        'LocalStorageModule', 
        'angularFileUpload'
    ]);

    var app = angular.module('app')
        .config(
        [ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider', 'localStorageServiceProvider',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider, localStorageServiceProvider) {
                
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $interpolateProvider.startSymbol('::');
                $interpolateProvider.endSymbol('::');

                localStorageServiceProvider
                    .setPrefix('LMSApp')
                    .setStorageType('localStorage')
                    .setNotify(true, true)
                    .setStorageCookieDomain('');
                }
        ]);

// angular.module('app').controller('Constants', ['$scope', '$rootScope', 'localStorageService',function ($scope, $rootScope, localStorageService) {
//     // TODO: change to the VM base url
//     localStorageService.set('baseUrl', '10.31.169.169:8080/lms/api/');        
// }]);      

                


})();