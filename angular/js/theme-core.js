(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/angular/theme-core.js":[function(require,module,exports){
// Curriculum
require('../html/_curriculum');

// Scrolling behaviour
require('../html/_scroll');

// Quiz timer
require('../html/_countdown');

// Earnings chart
require('../html/_flotchart-earnings');

// Angular App
require('./angular/app.js');
require('./angular/config.router.js');
require('./angular/main.js');

// Library Directives
require('../../../../lib/essential/js/angular/main');
require('../../../../lib/layout/js/angular/main');
require('../../../../lib/sidebar/js/angular/main');
require('../../../../lib/maps/js/angular/_google-maps');
require('../../../../lib/media/js/angular/main');
require('../../../../lib/material/js/angular/main');

// Custom Directives
require('./angular/directives/navbar-transition-scroll');
require('./angular/directives/countdown');
require('./angular/directives/curriculum');
require('./angular/directives/flotchart-earnings');
},{"../../../../lib/essential/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/main.js","../../../../lib/layout/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/main.js","../../../../lib/maps/js/angular/_google-maps":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/maps/js/angular/_google-maps.js","../../../../lib/material/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/main.js","../../../../lib/media/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/main.js","../../../../lib/sidebar/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/main.js","../html/_countdown":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_countdown.js","../html/_curriculum":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_curriculum.js","../html/_flotchart-earnings":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_flotchart-earnings.js","../html/_scroll":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_scroll.js","./angular/app.js":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/app.js","./angular/config.router.js":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/config.router.js","./angular/directives/countdown":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/countdown.js","./angular/directives/curriculum":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/curriculum.js","./angular/directives/flotchart-earnings":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/flotchart-earnings.js","./angular/directives/navbar-transition-scroll":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/navbar-transition-scroll.js","./angular/main.js":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/main.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/charts/js/flot/_helper.js":[function(require,module,exports){
var skin = require('../lib/_skin')();

var charts =
{
    // utility class
    utility: {
        chartColors: [ config.skins[ skin ][ 'primary-color' ], colors[ 'default-color' ], colors[ 'danger-color' ], colors[ 'success-color' ], colors[ 'warning-color' ] ],
        chartBackgroundColors: [ "rgba(255,255,255,0)", "rgba(255,255,255,0)" ],

        applyStyle: function (that) {
            that.options.colors = charts.utility.chartColors;
            that.options.grid.backgroundColor = { colors: charts.utility.chartBackgroundColors };
            that.options.grid.borderColor = charts.utility.chartColors[ 0 ];
            that.options.grid.color = charts.utility.chartColors[ 0 ];
        },

        // generate random number for charts
        randNum: function () {
            return (Math.floor(Math.random() * (1 + 40 - 20)) ) + 20;
        }
    }

};

module.exports = charts;
},{"../lib/_skin":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/charts/js/lib/_skin.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/charts/js/lib/_skin.js":[function(require,module,exports){
module.exports = (function () {
    var skin = $.cookie('skin');

    if (typeof skin == 'undefined') {
        skin = 'default';
    }
    return skin;
});
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_carousel.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('carousel', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCarousel();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_check-all.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'check-all') {
                        el.tkCheckAll();
                    }

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'collapse') {
                        el.tkCollapse();
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_cover.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('cover', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function () {
                        el.tkCover();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_datepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('datepicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDatePicker();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_daterangepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('daterangepickerReport', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReport();
                }
            };
        } ])
        .directive('daterangepickerReservation', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReservation();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_expandable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('expandable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkExpandable();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_minicolors.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('minicolors', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkMiniColors();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_modal.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'modal') {
                        el.tkModal();
                    }
                    if (attrs.toggle == 'tk-modal-demo') {
                        el.tkModalDemo();
                    }

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_nestable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('nestable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkNestable();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_panel-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    var randomId = function () {
        /** @return String */
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    angular.module('app')
        .directive('toggle', [ '$compile', function ($compile) {
            return {
                restrict: 'A',
                priority: 100,
                compile: function (el, attrs) {

                    if (attrs.toggle !== 'panel-collapse') return;

                    var body = angular.element('.panel-body', el),
                        id = body.attr('id') || randomId(),
                        collapse = angular.element('<div/>');

                    collapse
                        .attr('id', id)
                        .addClass('collapse' + (el.data('open') ? ' in' : ''))
                        .append(body.clone());

                    body.remove();

                    el.append(collapse);

                    $('.panel-collapse-trigger', el)
                        .attr('data-toggle', 'collapse')
                        .attr('data-target', '#' + id)
                        .collapse({trigger: false})
                        .removeAttr('style');

                    return function (scope, el, attrs) {
                    };

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_select2.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'select2' || attrs.toggle == 'select2-tags') {
                        el.tkSelect2();
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_selectpicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('selectpicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSelectPicker();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_slider.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slider', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.slider == 'default') {
                        el.tkSlider();
                    }

                    if (attrs.slider == 'formatter') {
                        el.tkSliderFormatter();
                    }

                }
            };
        } ]);

    angular.module('app')
        .directive('onSlide', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    el.tkSliderUpdate();

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_summernote.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('summernote', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSummernote();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_tables.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'data-table') {
                        el.tkDataTable();
                    }

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_tabs.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tab') {
                        el.click(function(e){
                            e.preventDefault();
                        });
                    }

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_touchspin.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'touch-spin') {
                        el.tkTouchSpin();
                    }

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_tree.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tree') {
                        el.tkFancyTree();
                    }

                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_wizard.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'wizard') {
                        el.tkWizard();
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/main.js":[function(require,module,exports){
require('./_panel-collapse');
require('./_carousel');
require('./_check-all');
require('./_collapse');
require('./_cover');
require('./_datepicker');
require('./_daterangepicker');
require('./_expandable');
require('./_minicolors');
require('./_modal');
require('./_nestable');
require('./_select2');
require('./_selectpicker');
require('./_slider');
require('./_summernote');
require('./_touchspin');
require('./_tables');
require('./_tabs');
require('./_tree');
require('./_wizard');
},{"./_carousel":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_carousel.js","./_check-all":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_check-all.js","./_collapse":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_collapse.js","./_cover":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_cover.js","./_datepicker":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_datepicker.js","./_daterangepicker":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_daterangepicker.js","./_expandable":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_expandable.js","./_minicolors":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_minicolors.js","./_modal":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_modal.js","./_nestable":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_nestable.js","./_panel-collapse":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_panel-collapse.js","./_select2":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_select2.js","./_selectpicker":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_selectpicker.js","./_slider":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_slider.js","./_summernote":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_summernote.js","./_tables":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_tables.js","./_tabs":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_tabs.js","./_touchspin":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_touchspin.js","./_tree":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_tree.js","./_wizard":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/_wizard.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_gridalicious.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'gridalicious') {
                        $timeout(function(){
                            el.tkGridalicious();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_isotope.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'isotope') {
                        $timeout(function(){
                            el.tkIsotope();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_parallax.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('parallax', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkParallax();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_scrollable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('scrollable', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable();
                }
            };
        } ])
        .directive('scrollableH', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable({ horizontal: true });
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_sidebar-pc.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'sidebar-size-pc-demo') {
                        el.tkSidebarSizePcDemo();
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/main.js":[function(require,module,exports){
require('./_scrollable');
require('./_isotope');
require('./_parallax');
require('./_gridalicious');
require('./_sidebar-pc');
},{"./_gridalicious":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_gridalicious.js","./_isotope":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_isotope.js","./_parallax":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_parallax.js","./_scrollable":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_scrollable.js","./_sidebar-pc":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/_sidebar-pc.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/maps/js/angular/_google-maps.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle !== 'google-maps') return;

                    el.tkGoogleMap();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/_forms.js":[function(require,module,exports){
(function ($) {
    "use strict";

    angular.module('app')
        .directive('formControlMaterial', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.find('.form-control').tkFormControlMaterial();
                }
            };
        } ]);

})(jQuery);
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/_ripple.js":[function(require,module,exports){
(function () {
    "use strict";

    var ripple = function (e) {

        var el, ink, d, x, y;

        el = angular.element(this);

        el.addClass('ripple');

        if (el.parents('.sidebar-skin-white').length) {
            el.addClass('ripple-dark-fade');
        }

        if (el.parents('.sidebar-skin-dark').length) {
            el.addClass('ripple-light-fade');
        }

        if (el.is('.btn-white')) {
            el.addClass('ripple-dark-fade');
        }

        if (el.attr('href') && ! el.data('toggle')) {

            e.preventDefault();
            e.stopPropagation();

            setTimeout(function () {
                document.location = el.attr('href');
            }, 400);
        }

        // create .ink element if it doesn't exist
        if (el.find(".ink").length === 0)
            el.prepend("<span class='ink'></span>");

        ink = el.find(".ink");
        // in case of quick double clicks stop the previous animation
        ink.removeClass("animate");

        // set size of .ink
        if (! ink.height() && ! ink.width()) {
            // use el's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
            d = Math.max(el.outerWidth(), el.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        // logic = click coordinates relative to page - el's position relative to page - half of self height/width to make it controllable from the center;
        x = e.pageX - el.offset().left - ink.width() / 2;
        y = e.pageY - el.offset().top - ink.height() / 2;

        // set the position and add class .animate
        ink.css({top: y + 'px', left: x + 'px'}).addClass("animate");

    };

    angular.module('app')
        .directive('uiSref', [ function () {
            return {
                restrict: 'A',
                priority: 999,
                link: function (scope, el) {
                    if (el[ 0 ].nodeName == 'A' || el[ 0 ].nodeName == 'BUTTON') {
                        el.click(ripple);
                    }
                }
            };
        } ])
        .directive('btn', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.click(ripple);
                }
            };
        } ])
        .directive('sidebarMenu', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                priority: 999,
                link: function (scope, el) {
                    $timeout(function () {
                        el.find('>li>a').click(ripple);
                    });
                }
            };
        } ])
        .directive('navbarNav', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.find('>li>a').click(ripple);
                }
            };
        } ])
        .directive('dropdownMenu', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.find('>li>a').click(ripple);
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/main.js":[function(require,module,exports){
require('./_ripple');
require('./_forms');
},{"./_forms":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/_forms.js","./_ripple":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/_ripple.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/_owl.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('owlBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlDefault();
                    }, 200);
                }
            };
        } ])
        .directive('owlMixed', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlMixed();
                    }, 200);
                }
            };
        } ])
        .directive('owlPreview', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlPreview();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/_slick.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slickBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkSlickDefault();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/main.js":[function(require,module,exports){
require('./_owl');
require('./_slick');
},{"./_owl":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/_owl.js","./_slick":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/_slick.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/_sidebar-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'collapse') return;

                    el.tkSidebarCollapse();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/_sidebar-dropdown.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'dropdown') return;

                    el.tkSidebarDropdown();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/_sidebar-toggle-bar.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggleBar', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggleBar) {
                        el.tkSidebarToggleBar();
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/main.js":[function(require,module,exports){
require('./_sidebar-dropdown');
require('./_sidebar-collapse');
require('./_sidebar-toggle-bar');
},{"./_sidebar-collapse":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/_sidebar-collapse.js","./_sidebar-dropdown":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/_sidebar-dropdown.js","./_sidebar-toggle-bar":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/_sidebar-toggle-bar.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/app.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.utils',
        'ui.jq'
    ]);

    var app = angular.module('app')
        .config(
        [ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $interpolateProvider.startSymbol('::');
                $interpolateProvider.endSymbol('::');
            }
        ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/config.router.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app')
        .run([ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config(
        [ '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                var htmlClass = {
                    website: 'transition-navbar-scroll top-navbar-xlarge bottom-footer',
                    websitePricing: 'top-navbar-xlarge bottom-footer app-desktop',
                    websiteSurvey: 'top-navbar-xlarge bottom-footer app-desktop app-mobile',
                    websiteLogin: 'hide-sidebar ls-bottom-footer',
                    websiteTakeQuiz: 'transition-navbar-scroll top-navbar-xlarge bottom-footer app-desktop app-mobile',
                    appl3: 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l3',
                    appl1r3: 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l1 sidebar-r3'
                };

                $urlRouterProvider
                    .otherwise('/website-pages/home');

                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'website/login.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.websiteLogin;
                            $scope.app.settings.bodyClass = 'login';
                        }]
                    })
                    .state('sign-up', {
                        url: '/sign-up',
                        templateUrl: 'website/sign-up.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.websiteLogin;
                            $scope.app.settings.bodyClass = 'login';
                        }]
                    });

                $stateProvider
                    .state('website-pages', {
                        abstract: true,
                        url: '/website-pages',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-pages.tutors', {
                        url: '/tutors',
                        templateUrl: 'website/tutors.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-pages.home', {
                        url: '/home',
                        templateUrl: 'website/home.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-pages.pricing', {
                        url: '/pricing',
                        templateUrl: 'website/pricing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.websitePricing;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-pages.survey', {
                        url: '/survey',
                        templateUrl: 'website/survey.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.websiteSurvey;
                            $scope.app.settings.bodyClass = 'survey';
                        }]
                    })
                    .state('website-pages.contact', {
                        url: '/contact',
                        templateUrl: 'website/contact.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('website-forum', {
                        abstract: true,
                        url: '/website-forum',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-forum.home', {
                        url: '/home',
                        templateUrl: 'website/forum-home.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-forum.category', {
                        url: '/category',
                        templateUrl: 'website/forum-category.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-forum.thread', {
                        url: '/thread',
                        templateUrl: 'website/forum-thread.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('website-blog', {
                        abstract: true,
                        url: '/website-blog',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-blog.listing', {
                        url: '/listing',
                        templateUrl: 'website/blog-listing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-blog.post', {
                        url: '/post',
                        templateUrl: 'website/blog-post.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('website-courses', {
                        abstract: true,
                        url: '/website-courses',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-courses.grid', {
                        url: '/grid',
                        templateUrl: 'website/courses-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-courses.list', {
                        url: '/list',
                        templateUrl: 'website/courses-list.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-courses.single', {
                        url: '/single',
                        templateUrl: 'website/course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('website-student', {
                        abstract: true,
                        url: '/website-student',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-student.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'website/student-dashboard.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.courses', {
                        url: '/courses',
                        templateUrl: 'website/student-courses.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course', {
                        url: '/take-course',
                        templateUrl: 'website/student-take-course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-course-info', {
                        url: '/take-course-course-info',
                        templateUrl: 'website/student-take-course-course-info.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-announcement', {
                        url: '/take-course-announcement',
                        templateUrl: 'website/student-take-course-announcement.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-deadlines', {
                        url: '/take-course-deadlines',
                        templateUrl: 'website/student-take-course-deadlines.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-resources', {
                        url: '/take-course-resources',
                        templateUrl: 'website/student-take-course-resources.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-grades', {
                        url: '/take-course-grades',
                        templateUrl: 'website/student-take-course-grades.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-discussions', {
                        url: '/take-course-discussions',
                        templateUrl: 'website/student-take-course-discussions.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-course-students', {
                        url: '/take-course-students',
                        templateUrl: 'website/student-take-course-students.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.course-forums', {
                        url: '/course-forums',
                        templateUrl: 'website/student-course-forums.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.course-forum-thread', {
                        url: '/course-forum-thread',
                        templateUrl: 'website/student-course-forum-thread.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.take-quiz', {
                        url: '/take-quiz',
                        templateUrl: 'website/student-take-quiz.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.websiteTakeQuiz;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.messages', {
                        url: '/messages',
                        templateUrl: 'website/student-messages.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.private-profile', {
                        url: '/private-profile',
                        templateUrl: 'website/student-private-profile.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-student.billing', {
                        url: '/billing',
                        templateUrl: 'website/student-billing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('website-instructor', {
                        abstract: true,
                        url: '/website-instructor',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('website-instructor.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'website/instructor-dashboard.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.courses', {
                        url: '/courses',
                        templateUrl: 'website/instructor-courses.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.edit-course', {
                        url: '/edit-course',
                        templateUrl: 'website/instructor-edit-course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.edit-course-meta', {
                        url: '/edit-course-meta',
                        templateUrl: 'website/instructor-edit-course-meta.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.edit-course-lessons', {
                        url: '/edit-course-lessons',
                        templateUrl: 'website/instructor-edit-course-lessons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.earnings', {
                        url: '/earnings',
                        templateUrl: 'website/instructor-earnings.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.statement', {
                        url: '/instructor',
                        templateUrl: 'website/instructor-statement.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.messages', {
                        url: '/messages',
                        templateUrl: 'website/instructor-messages.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.private-profile', {
                        url: '/private-profile',
                        templateUrl: 'website/instructor-private-profile.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('website-instructor.billing', {
                        url: '/billing',
                        templateUrl: 'website/instructor-billing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('essential', {
                        abstract: true,
                        url: '/essential',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('essential.buttons', {
                        url: '/buttons',
                        templateUrl: 'essential/buttons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('essential.icons', {
                        url: '/icons',
                        templateUrl: 'essential/icons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('essential.progress', {
                        url: '/progress',
                        templateUrl: 'essential/progress.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('essential.grid', {
                        url: '/grid',
                        templateUrl: 'essential/grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('essential.forms', {
                        url: '/forms',
                        templateUrl: 'essential/forms.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('essential.tables', {
                        url: '/tables',
                        templateUrl: 'essential/tables.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('essential.tabs', {
                        url: '/tabs',
                        templateUrl: 'essential/tabs.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.website;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('app-student', {
                        abstract: true,
                        url: '/app-student',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('app-student.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'app/student-dashboard.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.messages', {
                        url: '/messages',
                        templateUrl: 'app/student-messages.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.private-profile', {
                        url: '/profile',
                        templateUrl: 'app/student-profile.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.billing', {
                        url: '/billing',
                        templateUrl: 'app/student-billing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.courses', {
                        url: '/courses',
                        templateUrl: 'app/student-courses.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.course-forums', {
                        url: '/course-forums',
                        templateUrl: 'app/student-course-forums.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.course-forum-thread', {
                        url: '/course-forum-thread',
                        templateUrl: 'app/student-course-forum-thread.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.take-course', {
                        url: '/take-course',
                        templateUrl: 'app/student-take-course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.take-course-a', {
                        url: '/take-course',
                        templateUrl: 'app/student-take-course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-student.take-quiz', {
                        url: '/take-quiz',
                        templateUrl: 'app/student-take-quiz.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('app-forum', {
                        abstract: true,
                        url: '/app-forum',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('app-forum.home', {
                        url: '/home',
                        templateUrl: 'app/forum-home.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-forum.category', {
                        url: '/category',
                        templateUrl: 'app/forum-category.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-forum.thread', {
                        url: '/thread',
                        templateUrl: 'app/forum-thread.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('app-courses', {
                        abstract: true,
                        url: '/app-courses',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('app-courses.grid', {
                        url: '/grid',
                        templateUrl: 'app/directory-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-courses.list', {
                        url: '/list',
                        templateUrl: 'app/directory-list.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl1r3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-courses.course', {
                        url: '/course',
                        templateUrl: 'app/course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });

                $stateProvider
                    .state('app-instructor', {
                        abstract: true,
                        url: '/app-instructor',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('app-instructor.dashboard', {
                        url: '/dashboard',
                        templateUrl: 'app/instructor-dashboard.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.courses', {
                        url: '/courses',
                        templateUrl: 'app/instructor-courses.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.edit-course', {
                        url: '/edit-course',
                        templateUrl: 'app/instructor-edit-course.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.edit-course-meta', {
                        url: '/edit-course-meta',
                        templateUrl: 'app/instructor-edit-course-meta.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.edit-course-lessons', {
                        url: '/edit-course-lessons',
                        templateUrl: 'app/instructor-edit-course-lessons.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.earnings', {
                        url: '/earnings',
                        templateUrl: 'app/instructor-earnings.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.statement', {
                        url: '/instructor',
                        templateUrl: 'app/instructor-statement.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.messages', {
                        url: '/messages',
                        templateUrl: 'app/instructor-messages.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.private-profile', {
                        url: '/private-profile',
                        templateUrl: 'app/instructor-private-profile.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    })
                    .state('app-instructor.billing', {
                        url: '/billing',
                        templateUrl: 'app/instructor-billing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = htmlClass.appl3;
                            $scope.app.settings.bodyClass = '';
                        }]
                    });
            }
        ]
    );

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/countdown.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('tkCountdown', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCountdown();
                    scope.$on("$destroy", function(){
                        el.countdown('pause');
                    });
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/curriculum.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('curriculum', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCurriculum();
                    el.find('.list-group-item').click(function(){
                       scope.$state.go($(this).data('target'));
                    });
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/flotchart-earnings.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'flot-chart-earnings') {
                        el.tkFlotChartEarnings();
                    }
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/navbar-transition-scroll.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('windowNavbarTransition', [ '$window', function ($window) {
            return function (scope, el) {
                angular.element($window).tkScrollNavbarTransition();
            };
        } ])
        .directive('stContentInner', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkScrollNavbarTransition();
                }
            };
        } ]);

})();
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/main.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .controller('AppCtrl', [ '$scope', '$state',
            function ($scope, $state) {

                $scope.app = {
                    settings: {
                        htmlClass: '',
                        bodyClass: ''
                    }
                };

                $scope.$state = $state;

            } ]);

})();

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_countdown.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkCountdown = function () {
        this.countdown({
            until: moment().add(10, 'minute').toDate()
        });
    };

    $('.tk-countdown').tkCountdown();

})(jQuery);
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_curriculum.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $.fn.tkCurriculum = function () {

        var e = this;

        if (typeof angular == 'undefined') {
            this.find('.list-group-item').on('click', function () {
                location.href = $(this).data('target');
            });
        }

        this.find('.collapse')
            .on('show.bs.collapse', function () {
                e.addClass('open');
            })
            .on('hide.bs.collapse', function () {
                e.removeClass('open');
            });
    };

    $('.curriculum').tkCurriculum();

})(jQuery);
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_flotchart-earnings.js":[function(require,module,exports){
(function ($) {

    var skin = require('../../../../lib/charts/js/lib/_skin')();
    var charts = require('../../../../lib/charts/js/flot/_helper');

    if (typeof charts == 'undefined')
        return;

    charts.chart_earnings =
    {
        // chart data
        data: {
            d1: [],
            d2: []
        },

        // will hold the chart object
        plot: null,

        // chart options
        options: {
            colors: [ colors[ 'warning-color' ], colors[ 'success-color' ] ],
            grid: {
                color: colors[ 'default-light-color' ],
                borderWidth: 1,
                borderColor: "transparent",
                clickable: true,
                hoverable: true
            },
            series: {
                grow: {active: false},
                lines: {
                    show: true,
                    fill: false,
                    lineWidth: 2,
                    steps: false,
                    color: config.skins[ skin ][ 'primary-color' ]
                },
                points: {show: false}
            },
            legend: {
                noColumns: 2,
                position: "nw",
                backgroundColor: null,
                backgroundOpacity: 0
            },
            yaxis: {
                ticks: 3,
                tickSize: 40,
                tickFormatter: function (val, axis) {
                    return val + "k";
                }
            },
            xaxis: {ticks: 4, tickDecimals: 0, tickColor: 'transparent'},
            shadowSize: 0,
            tooltip: true,
            tooltipOpts: {
                content: "%s : %y.0",
                shifts: {
                    x: - 30,
                    y: - 50
                },
                defaultTheme: false
            }
        },

        // initialize
        init: function (wrapper) {

            if (! wrapper.length) return;

            // generate some data
            this.data.d1 = [ [ 1, 10 + charts.utility.randNum() ], [ 2, 20 + charts.utility.randNum() ], [ 3, 50 + charts.utility.randNum() ], [ 4, 160 + charts.utility.randNum() ], [ 5, 110 + charts.utility.randNum() ], [ 6, 36 + charts.utility.randNum() ], [ 7, 70 + charts.utility.randNum() ], [ 8, 30 + charts.utility.randNum() ], [ 9, 36 + charts.utility.randNum() ], [ 10, 80 + charts.utility.randNum() ], [ 11, 140 + charts.utility.randNum() ], [ 12, 47 + charts.utility.randNum() ], [ 13, 50 + charts.utility.randNum() ], [ 14, 50 + charts.utility.randNum() ], [ 15, 45 + charts.utility.randNum() ], [ 16, 100 + charts.utility.randNum() ], [ 17, 50 + charts.utility.randNum() ], [ 18, 53 + charts.utility.randNum() ], [ 19, 56 + charts.utility.randNum() ], [ 20, 59 + charts.utility.randNum() ], [ 21, 62 + charts.utility.randNum() ], [ 22, 90 + charts.utility.randNum() ], [ 23, 56 + charts.utility.randNum() ], [ 24, 59 + charts.utility.randNum() ], [ 25, 62 + charts.utility.randNum() ], [ 26, 65 + charts.utility.randNum() ], [ 27, 80 + charts.utility.randNum() ], [ 28, 71 + charts.utility.randNum() ], [ 29, 75 + charts.utility.randNum() ], [ 30, 120 + charts.utility.randNum() ] ];
            this.data.d2 = [ [ 1, 3 + charts.utility.randNum() ], [ 2, 6 + charts.utility.randNum() ], [ 3, 30 + charts.utility.randNum() ], [ 4, 110 + charts.utility.randNum() ], [ 5, 80 + charts.utility.randNum() ], [ 6, 18 + charts.utility.randNum() ], [ 7, 50 + charts.utility.randNum() ], [ 8, 15 + charts.utility.randNum() ], [ 9, 18 + charts.utility.randNum() ], [ 10, 60 + charts.utility.randNum() ], [ 11, 110 + charts.utility.randNum() ], [ 12, 27 + charts.utility.randNum() ], [ 13, 30 + charts.utility.randNum() ], [ 14, 33 + charts.utility.randNum() ], [ 15, 24 + charts.utility.randNum() ], [ 16, 80 + charts.utility.randNum() ], [ 17, 30 + charts.utility.randNum() ], [ 18, 33 + charts.utility.randNum() ], [ 19, 36 + charts.utility.randNum() ], [ 20, 39 + charts.utility.randNum() ], [ 21, 42 + charts.utility.randNum() ], [ 22, 70 + charts.utility.randNum() ], [ 23, 36 + charts.utility.randNum() ], [ 24, 39 + charts.utility.randNum() ], [ 25, 42 + charts.utility.randNum() ], [ 26, 45 + charts.utility.randNum() ], [ 27, 60 + charts.utility.randNum() ], [ 28, 51 + charts.utility.randNum() ], [ 29, 55 + charts.utility.randNum() ], [ 30, 100 + charts.utility.randNum() ] ];

            // make chart
            this.plot = $.plot(
                wrapper, [
                    {
                        label: "Gross Revenue",
                        data: this.data.d1
                    },
                    {
                        label: "Net Revenue",
                        data: this.data.d2
                    }
                ],
                this.options
            );
        }
    };

    /**
     * jQuery plugin wrapper for compatibility with Angular UI.Utils: jQuery Passthrough
     */
    $.fn.tkFlotChartEarnings = function () {

        if (! this.length) return;

        charts.chart_earnings.init(this);

    };

    $('[data-toggle="flot-chart-earnings"]').tkFlotChartEarnings();

})(jQuery);
},{"../../../../lib/charts/js/flot/_helper":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/charts/js/flot/_helper.js","../../../../lib/charts/js/lib/_skin":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/charts/js/lib/_skin.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_scroll.js":[function(require,module,exports){
(function ($, window) {
    "use strict";

    var $window = $(window),
        $content = $('.st-content-inner');

    $.fn.tkScrollNavbarTransition = function () {

        var handleScroll = function (e) {

            var $navbar = $('.navbar-fixed-top'),
                $html = $('html');

            if (Modernizr.touch || ! $navbar.length || ! $html.is('.transition-navbar-scroll')) return false;

            var scrollTop = parseInt($(e.currentTarget).scrollTop(), 10);

            if (! isNaN(scrollTop)) {
                if (scrollTop > 50) {
                    if ($navbar.data('z') !== 1) {
                        $navbar.attr('data-z', 1);
                    }
                    if ($navbar.is('.navbar-size-xlarge')) {
                        $navbar.removeClass('navbar-size-xlarge');
                    }
                    if ($html.is('.ls-top-navbar-xlarge')) {
                        $html.removeClass('ls-top-navbar-xlarge').addClass('ls-top-navbar-large');
                    }
                    if ($html.is('.top-navbar-xlarge')) {
                        $html.removeClass('top-navbar-xlarge').addClass('top-navbar-large');
                    }
                }
                if (scrollTop <= 0) {
                    $navbar.attr('data-z', 0);
                    $navbar.addClass('navbar-size-xlarge');
                    if ($html.is('.ls-top-navbar-large')) {
                        $html.removeClass('ls-top-navbar-large').addClass('ls-top-navbar-xlarge');
                    }
                    if ($html.is('.top-navbar-large')) {
                        $html.removeClass('top-navbar-large').addClass('top-navbar-xlarge');
                    }
                }
            }

        };

        this.scroll(handleScroll);

    };

    if ($content.length) {
        $content.tkScrollNavbarTransition();
    }
    else {
        $window.tkScrollNavbarTransition();
    }

})(jQuery, window);
},{}]},{},["./src/js/themes/angular/theme-core.js"]);
