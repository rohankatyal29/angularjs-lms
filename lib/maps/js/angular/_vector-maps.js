(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'vector-world-map-gdp') {
                        el.tkVectorWorldMapGDP();
                    }
                    if (attrs.toggle == 'vector-world-map-markers') {
                        el.tkVectorWorldMapMarkers();
                    }
                    if (attrs.toggle == 'vector-usa-unemployment') {
                        el.tkVectorUSAUnemployment();
                    }
                    if (attrs.toggle == 'vector-region-selection') {
                        el.tkVectorRegionSelection();
                    }
                    if (attrs.toggle == 'vector-france-elections') {
                        el.tkVectorFranceElections();
                    }
                    if (attrs.toggle == 'vector-random-colors') {
                        el.tkVectorRandomColors();
                    }
                    if (attrs.toggle == 'vector-mall-map') {
                        el.tkVectorMallMap();
                    }
                    if (attrs.toggle == 'vector-projection-map') {
                        el.tkVectorProjectionMap();
                    }

                }
            };
        } ]);

})();