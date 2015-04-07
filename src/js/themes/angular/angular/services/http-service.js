// TODO: add AppState as a dependency 
App.factory('HttpService', function ($log, $q, $http, $state, $rootScope) {
    var node_root = $rootScope.app.nodeUrl;
    var rest_root = $rootScope.app.restUrl;
    var nodeUrl = function (path) {
        return node_root + path
    };
    var restUrl = function (path) {
        return rest_root + path
    };

    var get = function (path, queryData, isNode, returnOnlySuccess, isCached, suspendLogging) {
        return http('get', path, undefined, queryData, isNode, (returnOnlySuccess === undefined) ? true : returnOnlySuccess, isCached, suspendLogging);
    };

    var post = function (path, postData, queryData, isNode, returnOnlySuccess) {
        return http('post', path, postData, queryData, isNode, returnOnlySuccess, false);
    };

    var put = function (path, postData, queryData, isNode, returnOnlySuccess) {
        return http('put', path, postData, queryData, isNode, returnOnlySuccess, false);
    };

    var httpDelete = function (path, postData, queryData, isNode, returnOnlySuccess) {
        return http('delete', path, postData, queryData, isNode, returnOnlySuccess, false);
    };

    var stripList = function (data) {
        if(data.entries)
            return _.map(data.entries, function (entry) {
                return entry.content.properties
            });
        else if(data.data && data.data.variables){
            return listifyProcessData(data);
        }
    };

    var listifyProcessData = function (processData) {

        if (!processData || !processData.data || !processData.data.variables)
            return;

        var processData = processData.data.variables;
        var variableOutputLength = 0;
        var processOutputs = [];
        var variables = _.map(processData, function (value, variable) {
            if(_.isArray(value))
                variableOutputLength = value.length;
            else
                variableOutputLength = 1;

            return variable;
        });

        for (var i = 0; i < variableOutputLength; i++) {
            var processOutput = {};
            _.each(variables, function (variable) {
                if(_.isArray(processData[variable]))
                    processOutput[variable] = processData[variable][i];
                else
                    processOutput[variable] = processData[variable];

            });
            processOutputs.push(processOutput);
        }
        return processOutputs;
    };

    var cleanService = function (promise) {
        var deferred = $q.defer();
        promise.then(function (data) {
            deferred.resolve(stripList(data));
        }, function (data) {
            deferred.reject(data);
        });
        return deferred.promise;
    };

    var http = function (method, path, postData, queryData, isNode, returnOnlySuccess, isCached, suspendLogging) {
        const hasRawPostData = postData != undefined;
        const callDetails = method.toUpperCase() + " " + path + (hasRawPostData ? "(raw)" : "");

        var deferred = $q.defer();

        function log_warn(d) {
            if (!suspendLogging)
                $log.warn(d);
        }

        function log_debug(d) {
            if (!suspendLogging)
                $log.debug(d);
        }

        $http({
            method: method,
            cache: isCached,
            withCredentials: true,
            url: isNode ? nodeUrl(path) : restUrl(path),
            data: undefined == postData ? undefined : (hasRawPostData ? postData : $.param(postData)),
            params: queryData,
            headers: {'Content-Type': 'application/json'}
        }).
            success(function (data, status, headers, config) {
                if (data) {
                    if (!suspendLogging) {
                        log_debug(callDetails + ":success");
                        log_debug(data);
                    }
                } else {
                    log_warn(callDetails + ":failure");
                    log_warn(data);
                }
                if (returnOnlySuccess) {
                    if (data)
                        deferred.resolve(data);
                    else {
                        log_debug("Not returning data to caller because the call failed");
                        deferred.reject(data);
                    }
                } else {
                    deferred.resolve(data);
                }
            }).
            error(function (data, status, headers, config) {
                deferred.reject(data);
                if (status == 401) {
                    $log.debug('Unauthorised. Route to Login');
                    $state.history = $state.current.name;
                    $state.go('page.login');
                }
            });

        //TODO Loading tracker start
        return deferred.promise;
    };

    return {
        post: post,
        put: put,
        get: get,
        httpDelete: httpDelete,
        stripList: stripList,
        cleanService: cleanService,
        nodeUrl: nodeUrl,
        restUrl: restUrl
    };
});


