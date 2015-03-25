(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'flot-chart-simple') {
                        el.tkFlotChartSimple();
                    }
                    if (attrs.toggle == 'flot-chart-pie') {
                        el.tkFlotChartPie();
                    }
                    if (attrs.toggle == 'flot-chart-mixed') {
                        el.tkFlotChartMixed();
                    }
                    if (attrs.toggle == 'flot-chart-lines-1') {
                        el.tkFlotChartLines1();
                    }
                    if (attrs.toggle == 'flot-chart-lines-2') {
                        el.tkFlotChartLines2();
                    }
                    if (attrs.toggle == 'flot-chart-lines-3') {
                        el.tkFlotChartLines3();
                    }
                    if (attrs.toggle == 'flot-chart-ordered-bars') {
                        el.tkFlotChartOrderedBars();
                    }
                    if (attrs.toggle == 'flot-chart-donut') {
                        el.tkFlotChartDonut();
                    }
                    if (attrs.toggle == 'flot-chart-stacked-bars') {
                        el.tkFlotChartStackedBars();
                    }
                    if (attrs.toggle == 'flot-chart-horizontal-bars') {
                        el.tkFlotChartHorizontalBars();
                    }
                    if (attrs.toggle == 'flot-chart-live') {
                        el.tkFlotChartLive();
                    }
                }
            };
        } ]);

})();