(function () {
    "use strict";

    angular.module('app')
        .directive('easyPie', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkEasyPie();
                }
            };
        } ]);

})();