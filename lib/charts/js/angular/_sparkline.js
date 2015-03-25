(function () {
    "use strict";

    angular.module('app')
        .directive('sparklineLine', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSparkLine();
                }
            };
        } ])
        .directive('sparklineBar', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSparkBar();
                }
            };
        } ]);

})();