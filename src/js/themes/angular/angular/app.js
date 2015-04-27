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
        'angularFileUpload', 
        'ui.bootstrap'
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


    //TODO: Put the correct URL and proxy details here 
    app.constant("CONSTANTS", {
        "rest_url": "http://10.31.169.169:8080/lms/api",
        "rest_url_cors_proxy": "http://localhost:8040/lms/api"
    });

})();  