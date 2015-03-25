(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'morris-chart-area') {
                        $timeout(function(){
                            el.tkMorrisChartArea();
                        }, 100);
                    }
                    if (attrs.toggle == 'morris-chart-bar') {
                        $timeout(function(){
                            el.tkMorrisChartBar();
                        }, 100);
                    }
                    if (attrs.toggle == 'morris-chart-donut') {
                        $timeout(function(){
                            el.tkMorrisChartDonut();
                        }, 100);
                    }
                    if (attrs.toggle == 'morris-chart-line') {
                        $timeout(function(){
                            el.tkMorrisChartLine();
                        }, 100);
                    }
                }
            };
        } ]);

})();