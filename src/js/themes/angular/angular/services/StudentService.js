App.service('DashboardService', function ($http, $rootScope, HttpService, $q) {

    var dashboardData = new Object();
    var dataFetched = false;
    var fetchedContestid ='';

    var getDashboardData = function (contestid) {
        var deferred = $q.defer();
        if(dataFetched && fetchedContestid == contestid){
            deferred.resolve(dashboardData);
        } else{
            HttpService.post('processes/tapp_dashboarddata', {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": {"variables": { "contestid": contestid}}}
            ).then(function(data){
                    dashboardData = data;
                    deferred.resolve(dashboardData);
                });
            fetchedContestid = contestid
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getHistoricalData = function(contestid){
        return HttpService.cleanService(HttpService.get('historical-queries/tapp_noofentriesperweek', {
            inline: true,
            input_s1gro_contestid: contestid,
            "items-per-page": 1000,
            "time-dimension":"weekly",
            "appNamespace":"tapp",
            "relative-last-time":12
        }));


    }

    return {
        getDashboardData : getDashboardData,
        getHistoricalData : getHistoricalData
    };

});
