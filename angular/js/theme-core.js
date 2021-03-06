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
require('./angular/directives/modal');

// Custom Services 
require('./angular/services/http-service');
require('./angular/services/StudentService');
require('./angular/services/InstructorService');
require('./angular/services/CourseService');
require('./angular/services/RandomDataGeneratorService');
require('./angular/services/LoginService');


// Custom Factories
require('./angular/factories/LocalStorageFactory');  

// Custom Controllers 
require('./angular/controllers/StudentsController');
require('./angular/controllers/CourseController');
require('./angular/controllers/StudentTakeCourseController');
require('./angular/controllers/StudentTakeCourseInfoController');
require('./angular/controllers/StudentTakeCourseAnnouncementController');
require('./angular/controllers/StudentTakeCourseDeadlinesController');
require('./angular/controllers/StudentTakeCourseResourcesController');
require('./angular/controllers/StudentTakeCourseGradesController');
require('./angular/controllers/StudentTakeCourseDiscussionController');
require('./angular/controllers/StudentTakeCourseStudentsController');
require('./angular/controllers/StudentEnrollCourseController');
require('./angular/controllers/AddNewCourseController');
require('./angular/controllers/LoginController');
require('./angular/controllers/TimelineController');
require('./angular/controllers/PrivateProfileController');






},{"../../../../lib/essential/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/essential/js/angular/main.js","../../../../lib/layout/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/layout/js/angular/main.js","../../../../lib/maps/js/angular/_google-maps":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/maps/js/angular/_google-maps.js","../../../../lib/material/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/material/js/angular/main.js","../../../../lib/media/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/media/js/angular/main.js","../../../../lib/sidebar/js/angular/main":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/sidebar/js/angular/main.js","../html/_countdown":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_countdown.js","../html/_curriculum":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_curriculum.js","../html/_flotchart-earnings":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_flotchart-earnings.js","../html/_scroll":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/html/_scroll.js","./angular/app.js":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/app.js","./angular/config.router.js":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/config.router.js","./angular/controllers/AddNewCourseController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/AddNewCourseController.js","./angular/controllers/CourseController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/CourseController.js","./angular/controllers/LoginController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/LoginController.js","./angular/controllers/PrivateProfileController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/PrivateProfileController.js","./angular/controllers/StudentEnrollCourseController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentEnrollCourseController.js","./angular/controllers/StudentTakeCourseAnnouncementController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseAnnouncementController.js","./angular/controllers/StudentTakeCourseController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseController.js","./angular/controllers/StudentTakeCourseDeadlinesController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseDeadlinesController.js","./angular/controllers/StudentTakeCourseDiscussionController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseDiscussionController.js","./angular/controllers/StudentTakeCourseGradesController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseGradesController.js","./angular/controllers/StudentTakeCourseInfoController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseInfoController.js","./angular/controllers/StudentTakeCourseResourcesController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseResourcesController.js","./angular/controllers/StudentTakeCourseStudentsController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseStudentsController.js","./angular/controllers/StudentsController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentsController.js","./angular/controllers/TimelineController":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/TimelineController.js","./angular/directives/countdown":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/countdown.js","./angular/directives/curriculum":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/curriculum.js","./angular/directives/flotchart-earnings":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/flotchart-earnings.js","./angular/directives/modal":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/modal.js","./angular/directives/navbar-transition-scroll":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/navbar-transition-scroll.js","./angular/factories/LocalStorageFactory":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/factories/LocalStorageFactory.js","./angular/main.js":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/main.js","./angular/services/CourseService":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/CourseService.js","./angular/services/InstructorService":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/InstructorService.js","./angular/services/LoginService":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/LoginService.js","./angular/services/RandomDataGeneratorService":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/RandomDataGeneratorService.js","./angular/services/StudentService":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/StudentService.js","./angular/services/http-service":"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/http-service.js"}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/lib/charts/js/flot/_helper.js":[function(require,module,exports){
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


    // TODO: Put the correct URL and proxy details here 
    // rest_url_cors_proxy needs to be changed
    app.constant("CONSTANTS", {
        "rest_url": "http://10.31.169.169:8080/lms/api",
        "rest_url_cors_proxy": "http://localhost:8040/lms/api"       
    });

})();  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/config.router.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app')
        .run([ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
                 var htmlClass = {
                    website: 'transition-navbar-scroll top-navbar-xlarge bottom-footer',
                    websitePricing: 'top-navbar-xlarge bottom-footer app-desktop',
                    websiteSurvey: 'top-navbar-xlarge bottom-footer app-desktop app-mobile',
                    websiteLogin: 'hide-sidebar ls-bottom-footer',
                    websiteTakeQuiz: 'transition-navbar-scroll top-navbar-xlarge bottom-footer app-desktop app-mobile',
                    appl3: 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l3',
                    appl1r3: 'st-layout ls-top-navbar-large ls-bottom-footer show-sidebar sidebar-l1 sidebar-r3'
                };
                $rootScope.htmlClass = htmlClass;
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
                    .otherwise('/login');

                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'website/login.html',
                        controller: 'LoginController'
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
                        controller: 'StudentEnrollCourseController'
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
                        controller: 'TimelineController'
                    })
                    .state('website-student.courses', {
                        url: '/courses',
                        templateUrl: 'website/student-courses.html',
                        controller: 'CourseController'
                    })
                    .state('website-student.take-course', {
                        url: '/take-course',
                        templateUrl: 'website/student-take-course.html',
                        controller: 'StudentTakeCourseController'
                    })
                    .state('website-student.take-course-course-info', {
                        url: '/take-course-course-info',
                        templateUrl: 'website/student-take-course-course-info.html',
                        controller: 'StudentTakeCourseInfoController'
                    })
                    .state('website-student.take-course-announcement', {
                        url: '/take-course-announcement',
                        templateUrl: 'website/student-take-course-announcement.html',
                        controller: 'StudentTakeCourseAnnouncementController'
                    })
                    .state('website-student.take-course-deadlines', {
                        url: '/take-course-deadlines',
                        templateUrl: 'website/student-take-course-deadlines.html',
                        controller: 'StudentTakeCourseDeadlinesController'
                    })
                    .state('website-student.take-course-resources', {
                        url: '/take-course-resources',
                        templateUrl: 'website/student-take-course-resources.html',
                        controller: 'StudentTakeCourseResourcesController'
                    })
                    .state('website-student.take-course-grades', {
                        url: '/take-course-grades',
                        templateUrl: 'website/student-take-course-grades.html',
                        controller: 'StudentTakeCourseGradesController'
                    })
                    .state('website-student.take-course-discussions', {
                        url: '/take-course-discussions',
                        templateUrl: 'website/student-take-course-discussions.html',
                        controller: 'StudentTakeCourseDiscussionController'
                    })
                    .state('website-student.take-course-students', {
                        url: '/take-course-students',
                        templateUrl: 'website/student-take-course-students.html',
                        controller:  'StudentTakeCourseStudentsController'  
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
                        controller: 'PrivateProfileController'
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
                        controller: 'AddNewCourseController'
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
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/AddNewCourseController.js":[function(require,module,exports){
angular.module('app').controller('AddNewCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService', '$state', function ($scope, $rootScope, CourseDataService, $http, localStorageService, $state) {
       
      $scope.user = localStorageService.get("user");

      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';

      
      // create new course called by instructor
      $scope.createNewCourse = function(){
        $rootScope.addingNewCourse = true;
        var data = new Object({});
        
        data = { "name" : $scope.courseName,
          "domain" : $scope.domain,
          "credits" : String($scope.credits),
          "overview" : $scope.overview, 
          "description": $scope.description,
          "class_timings": ["Monday 11:30 - 13:00","Wednesday 10:00 - 11:30"], 
          "pre_requisites": ["Exposure to Economics","Exposure to accounting","Exposure to algebra and statistics","Sense of Curiosity"], 
          "evaluations": ["Quizzes: 25%","Assignments: 20%","Mid-term: 25%","End-term: 30%"], 
          "office_hours": ["Friday 16:00 - 17:00"],
          "textbooks": ["Corporate Finance, 2nd Edition, by Ivo Welch.","Corporate Finance, 9th Edition, by Ross, Westerfield & Jaffee.","Principles of Corporate Finance, 10th Edition, by Brealey, Myers & Allen."],
          "instructors": [localStorageService.get("user")] 
        };
      
        CourseDataService.createNewCourse(data, localStorageService.get("user").id).then(function(response){
          $scope.courseUploadIsSuccess = true;
        });
      };   

}]); 
        

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/CourseController.js":[function(require,module,exports){
angular.module('app').controller('CourseController', ['$scope', '$rootScope',  'CourseDataService','RandomDataGeneratorService' ,'$http' ,'localStorageService', '$state', 'StudentService', 'InstructorService',function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, $http, localStorageService, $state, StudentService, InstructorService) {
       

      var courses, announcement, deadline;
        
      $scope.user = localStorageService.get("user");
        
      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';

      $scope.recentAnnouncements = [];
      $scope.recentDeadlines = [];

      var getRandomIndex = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };


      $scope.goToAnnouncement = function(courseId){
        localStorageService.set('courseId', courseId);
        $state.go('website-student.take-course-announcement');
      };

      $scope.goToDeadline = function(courseId){
        localStorageService.set('courseId', courseId);
        $state.go('website-student.take-course-deadlines');
      };   


      var getRecentUpdatesForStudent = function(){  
        StudentService.getStudentForId($scope.user.id).then(function(data){
    
          var registeredCourses = data.courses;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }

          });
        });
      };

      var getRecentUpdatesForInstructor = function(){  
        InstructorService.getInstructorCourses($scope.user.id).then(function(data){
    
          var registeredCourses = data;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }

          });
          
        });
      };


      $scope.fetchingCourses = false;

      var getInstructorCourses = function(){
        $scope.fetchingCourses = true;
        InstructorService.getInstructorCourses($scope.user.id).then(function(data){
          $scope.courses = data;
          $scope.fetchingCourses = false;
          getRecentUpdatesForInstructor();
        });
      };


      //fetches registered courses for current user
      var getStudentRegisteredCourses = function(){  
        $scope.fetchingCourses = true;
        StudentService.getStudentForId($scope.user.id).then(function(data){
          $scope.courses = data.courses;
          $scope.fetchingCourses = false;
          getRecentUpdatesForStudent();
        });
      };

      $scope.setCourseId = function(id){

        localStorageService.set('courseId', id);

        CourseDataService.getCourseForID(id).then(function(data){
          localStorageService.set("course", data); 
        });
   
      };   

      $scope.$on('$viewContentLoaded', function(){
        if(($scope.user.role).localeCompare("student") === 0){
          getStudentRegisteredCourses();
        }
        else {
          getInstructorCourses();
        }

      });       


}]); 
        

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/LoginController.js":[function(require,module,exports){
angular.module('app').controller('LoginController', ['$scope', '$http', '$state', '$rootScope', '$q', 'HttpService', '$log', 'localStorageService', 'CONSTANTS', 'LoginService', function ($scope, $http, $state, $rootScope, $q, HttpService, $log, localStorageService, CONSTANTS, LoginService) {


    $scope.user = localStorageService.get("user");

    $scope.app.settings.bodyClass = 'login';
    $scope.app.settings.htmlClass = $rootScope.htmlClass.websiteLogin;


    $scope.login = function(){
        $rootScope.loggingInProgress = true;
        LoginService.checkCredentials($scope.email, $scope.password).then(function(responses){
    
            $rootScope.loggingInProgress = false;
            $rootScope.authMsg = false;
            localStorageService.set("user", responses);
            $state.go("website-student.courses");
           
        });
    };    

}]);
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/PrivateProfileController.js":[function(require,module,exports){
angular.module('app').controller('PrivateProfileController', ['$scope', '$rootScope',  'StudentService', 'RandomDataGeneratorService', 'InstructorService', 'localStorageService', '$state',function ($scope, $rootScope, StudentService, RandomDataGeneratorService, InstructorService, localStorageService, $state) {
      

      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';


      $scope.goToAnnouncement = function(courseId){
        localStorageService.set('courseId', courseId);
        $state.go('website-student.take-course-announcement');
      };

      $scope.goToDeadline = function(courseId){
        localStorageService.set('courseId', courseId);
        $state.go('website-student.take-course-deadlines');
      };   


      $scope.recentAnnouncements = [];
      $scope.recentDeadlines = [];


      var getRecentUpdatesForStudent = function(){  
        $scope.fetchingProfileData = true;
      	StudentService.getStudentForId(localStorageService.get("user").id).then(function(data){
          var registeredCourses = $scope.user.courses;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }

          });
          $scope.fetchingProfileData = false;
         });
      };  

      var getRecentUpdatesForInstructor = function(){  
      $scope.fetchingProfileData = true;
    	InstructorService.getInstructorCourses(localStorageService.get("user").id).then(function(data){
          var registeredCourses = data;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }
        	});
          $scope.fetchingProfileData = false;
          });
      };


      $scope.$on('$viewContentLoaded', function(){

      	StudentService.getStudentForId(localStorageService.get("user").id).then(function(data){
      		$scope.user = data;
      	});


        if((localStorageService.get("user").role).localeCompare("student") === 0){
          getRecentUpdatesForStudent();
        }
        else {
          getRecentUpdatesForInstructor();
        }

      });       
 
       	 
}]);
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentEnrollCourseController.js":[function(require,module,exports){
angular.module('app').controller('StudentEnrollCourseController', ['$scope', '$rootScope',  'CourseDataService','$http' ,'localStorageService','$state','StudentService',function ($scope, $rootScope, CourseDataService, $http, localStorageService, $state, StudentService) {
			 
	$scope.user = localStorageService.get("user");
	$scope.fetchingUnregisteredCourses = true;   

	$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
	$scope.app.settings.bodyClass = '';

	$scope.enroll = function(courseId){
		CourseDataService.registerCourseForStudent($scope.user.id, courseId).then(function(data){
			$state.go($state.$current, null, { reload: true });
		});
	};

	  $scope.goToAnnouncement = function(courseId){
	    localStorageService.set('courseId', courseId);
	    $state.go('website-student.take-course-announcement');
	  };

	  $scope.goToDeadline = function(courseId){
	    localStorageService.set('courseId', courseId);
	    $state.go('website-student.take-course-deadlines');
	  };   


	// fetches all the courses not enrolled by the current user 
	$scope.unregisteredCourses = [];
	var getAllUnregisteredCourses = function(){
		$scope.fetchingUnregisteredCourses = true;  
		CourseDataService.getAllCourses().then(function(data){
			courses = data;
			StudentService.getStudentForId($scope.user.id).then(function(data){
				registeredCourses = data.courses;

				if(!registeredCourses){
					$scope.fetchingUnregisteredCourses = false;
					$scope.unregisteredCourses = courses;
					return;
				}

				courses.forEach(function(course){

					var id = course.id, flag = 0;
					registeredCourses.forEach(function(registeredCourse){

						if(id === registeredCourse.id){
							flag = 1;
						}
					});

					if(flag === 0){
						$scope.unregisteredCourses.push(course);
					}

				});

				$scope.fetchingUnregisteredCourses = false;

			
		});
		 
		});

		
	};


	$scope.recentAnnouncements = [];
	$scope.recentDeadlines = [];

    var getRecentUpdatesForStudent = function(){  
        StudentService.getStudentForId($scope.user.id).then(function(data){
    
          var registeredCourses = data.courses;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }

          });
        });
      };

      var getRecentUpdatesForInstructor = function(){  
        InstructorService.getInstructorCourses($scope.user.id).then(function(data){
    
          var registeredCourses = data;

          registeredCourses.forEach(function(course){

            announcement = course.announcements[(course.announcements).length-1];
            deadline = course.assessments[(course.assessments).length-1];
 
            if(announcement){
              $scope.recentAnnouncements.push({ "announcement": announcement, "course": course });
            }
          
            if(deadline){
              $scope.recentDeadlines.push({ "deadline": deadline , "course": course });
            }

          });
        });
      };



	$scope.$on('$viewContentLoaded', function(){   
		getAllUnregisteredCourses(); 
		if(($scope.user.role).localeCompare("student") === 0){
          getRecentUpdatesForStudent();
        }
        else {
          getRecentUpdatesForInstructor();
        }
    
	});     

	

}]); 
				

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseAnnouncementController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseAnnouncementController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService', 'InstructorService', '$state', 'StudentService' ,function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService, InstructorService, $state, StudentService) {
  

    $scope.user = localStorageService.get("user");

	  $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';


    $scope.addNewAnnouncement = function(){
      var params = new Object({});
      params = {"announcement_text": $scope.announcement.text, "announcement_title": $scope.announcement.title};
      InstructorService.createNewAnnouncement(params, localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
          $state.go($state.$current, null, { reload: true });
      });
      
    };   


    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
          $state.go('website-student.courses');
      });
    };


    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	      $scope.announcement = {"text": "", "title": ""};
      });
    });       	 
}]);
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService) {
  
    
    $scope.user = localStorageService.get("user");
  
    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    $scope.personImagePicker = function(){
    	return RandomDataGeneratorService.personImagePicker();
    };

    // //set course cookie with current selected course
    // (function () {
    //     CourseDataService.getCourseForID(localStorageService.get('courseId')).then(function(data){ 
    //         localStorageService.set('course', data);
    //     });
    // }());  

    var getCourseData = function(id){ 
    CourseDataService.getCourseForID(id).then(function(data){
            localStorageService.set('course', data);
        });
    };

    $scope.$on('$viewContentLoaded', function(){
        getCourseData(localStorageService.get('courseId'));  
    });     
 
       	 
}]);  
   
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseDeadlinesController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseDeadlinesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService','localStorageService' ,'$upload', 'CONSTANTS', '$state', 'StudentService' ,function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, $upload, CONSTANTS, $state, StudentService) {
    
    var assessmentId = "";

    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    $scope.base_download_url =  CONSTANTS.rest_url_cors_proxy;  

 	$scope.$watch('deadline.file', function () {
        $scope.uploadDeadline($scope.deadline.file);
    });

    $scope.$watch('solution.file', function () {
        $scope.uploadSolution($scope.solution.file);    
    });

    $scope.setAssessmentId = function(id){
        assessmentId = id;
    };

    $scope.uploadSolution = function (files) {
     if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {   
                var file = files[i];
                $upload.upload({
                    url: CONSTANTS.rest_url_cors_proxy + '/students/' + localStorageService.get("user").id.replace(/"/g , "") + '/deadline/' + assessmentId ,
                    headers:{
                        'Content-Type': 'multipart/mixed'
                    },
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    $state.go($state.current, {}, {reload: true});
                }).error(function(){
                    $state.go($state.current, {}, {reload: true});
                });  
            }
        }
    };

    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };

    $scope.uploadDeadline= function (files) {
        if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                $upload.upload({
                    url: CONSTANTS.rest_url_cors_proxy + '/instructors/' + localStorageService.get("user").id.replace(/"/g , "") + '/deadline/' + localStorageService.get("courseId").replace(/"/g , "") ,
                    headers:{
                        'Content-Type': 'multipart/mixed'
                    },
                    file: file,
                    params: {'deadline_time': $scope.deadline.date, 'deadline_title': $scope.deadline.title }
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                    console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
                    $state.go($state.current, {}, {reload: true});
                }).error(function(){
                    $state.go($state.current, {}, {reload: true});
                });  
            }
        }
    };


    $scope.$on('$viewContentLoaded', function(){  
        CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
            localStorageService.set("course", data); 
            $scope.course = data;
            $scope.deadlines = data.assessments;
            $scope.base_download_url = CONSTANTS.rest_url;
        });
        $scope.deadline = {title: "", date: "", file: ""};
        $scope.solution = {file: ""};

    });     	 

}]);
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseDiscussionController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseDiscussionController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', 'StudentService' , '$state', function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, StudentService, $state) {
  
	$scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';


    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };



  	$scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	    });
    });  

}]);
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseGradesController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseGradesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService) {
  
	$scope.user = localStorageService.get("user");

	$scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';
	
   $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	    });
    });   

}]);
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseInfoController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseInfoController', [ '$scope',  '$rootScope','CourseDataService', 'RandomDataGeneratorService', 'localStorageService', 'CONSTANTS', 'StudentService' , '$state', function ($scope, $rootScope, CourseDataService, RandomDataGeneratorService, localStorageService, CONSTANTS, StudentService, $state){ 
    
    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';


    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           console.log("here");
           console.log(data);
           $state.go('website-student.courses');
      });
    };

    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
            $scope.course = data;
	    });
    });      	 
}]);    
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseResourcesController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseResourcesController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', '$upload', 'CONSTANTS', '$state', 'StudentService' ,function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, $upload, CONSTANTS, $state, StudentService) {
  
    $scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

  
    // To upload solutions to deadlines
 	$scope.$watch('resource.files', function () {
        $scope.upload($scope.resource.files);  
    });

    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };


    $scope.upload = function (files) {
        if (files && files.length) {
            /*jshint loopfunc: true */
            for (var i = 0; i < files.length; i++) {  
                var file = files[i];
                $upload.upload({
                    url: CONSTANTS.rest_url_cors_proxy + '/instructors/' + localStorageService.get("user").id.replace(/"/g , "") + '/course_material/' + localStorageService.get("course").id.replace(/"/g , ""),
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                    console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
                }).success(function (data, status, headers, config) {
                     $state.go($state.$current, null, { reload: true });
                }).error(function(){
                     $state.go($state.$current, null, { reload: true });
                });
            }
        }
    };   

    $scope.$on('$viewContentLoaded', function(){  
	    CourseDataService.getCourseForID(localStorageService.get("courseId")).then(function(data){
	    	localStorageService.set("course", data); 
	     	$scope.course = data;
	     	$scope.courseMaterials = $scope.course.courseMaterials;
            $scope.base_download_url = CONSTANTS.rest_url_cors_proxy;
	    });
        $scope.resource = {files : ''};
    });  
 	 
}]);
    
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentTakeCourseStudentsController.js":[function(require,module,exports){
angular.module('app').controller('StudentTakeCourseStudentsController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', 'localStorageService', 'StudentService',function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, localStorageService, StudentService) {
  
  $scope.students = {};

	$scope.user = localStorageService.get("user");

    $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';
  
    var getCourseStudents = function(courseId){
    	CourseDataService.getCourseStudents(courseId).then(function(data){
 			      console.log("dataaatatata");
            console.log(courseId);
            console.log(data);
            $scope.students = data;
   		});
    };

    $scope.leaveCourse = function(){
      StudentService.leaveCourse(localStorageService.get("courseId"), localStorageService.get("user").id).then(function(data){
           $state.go('website-student.courses');
      });
    };

      $scope.course = localStorageService.get('course');
 	    getCourseStudents(localStorageService.get('course').id);
   
}]);
    
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/StudentsController.js":[function(require,module,exports){
angular.module('app').controller('StudentsController', ['$scope', '$rootScope',  'StudentService', 'RandomDataGeneratorService', function ($scope, $rootScope, StudentService, RandomDataGeneratorService) {
      
      $scope.user = localStorageService.get("user");

      $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
      $scope.app.settings.bodyClass = '';
       
      var getAllStudentsData = function(){
	    		 StudentService.getAllStudents().then(function(data){
     			  $scope.students = data;
       		});
	    };

     	$scope.$on('$viewContentLoaded', function(){
        getAllStudentsData();
     	});
 
       	 
    }]);
  
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/controllers/TimelineController.js":[function(require,module,exports){
angular.module('app').controller('TimelineController', ['$scope', '$rootScope', 'RandomDataGeneratorService', 'CourseDataService', '$cookies', 'localStorageService', 'StudentService', 'InstructorService', '$state', function ($scope, $rootScope, RandomDataGeneratorService, CourseDataService, $cookies, localStorageService, StudentService, InstructorService, $state) {
  

    $scope.user = localStorageService.get("user");

	  $scope.app.settings.htmlClass = $rootScope.htmlClass.website;
    $scope.app.settings.bodyClass = '';

    $rootScope.$state = $state;


    var getTimelineData = function(){ 

      $scope.fetchingTimeline = true;
      
      if($scope.user.role === "student"){
        StudentService.getStudentForId($scope.user.id).then(function(data){
          studentData = RandomDataGeneratorService.timelineUIGenerator(data);
          $scope.timelineUpdates = studentData.updates;   
          $scope.fetchingTimeline = false;
        });
      }
      else {
        InstructorService.getInstructorForId($scope.user.id).then(function(data){
          instructorData = RandomDataGeneratorService.timelineUIGenerator(data);
          $scope.timelineUpdates = instructorData.updates;
          $scope.fetchingTimeline = false;
        });
      }
    };

    $scope.$on('$viewContentLoaded', function(){  
      getTimelineData();
    });  


}]);
  

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
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/directives/modal.js":[function(require,module,exports){
angular.module('app').directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value === true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
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
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/factories/LocalStorageFactory.js":[function(require,module,exports){
angular.module('app').factory("LocalStorageFactory", function($window, $rootScope) {
  angular.element($window).on('storage', function(event) {
    if (event.key === 'my-storage') {
      $rootScope.$apply();
    }
  });
  return {
    setData: function(key, val) {
      return  $window.localStorage && $window.localStorage.setItem(key, val);
    },
    getData: function(key) {
      return $window.localStorage && $window.localStorage.getItem(key);
    }
  };
});
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

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/CourseService.js":[function(require,module,exports){
angular.module('app').service('CourseDataService',['$http', '$rootScope', 'HttpService', '$q', 'RandomDataGeneratorService' , '$state',function ($http, $rootScope, HttpService, $q, RandomDataGeneratorService, $state) {

    var courses = new Object({});
    var dataFetched = false;
    var fetchedCourseId ='';
    var course = new Object({});
    var courseStudents = new Object({});

    var getAllCourses = function () {  
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(courses);
        } else{
            HttpService.get('/courses', {
                    "data": null
            }).then(function(data){
                    courses = data;
                    courses.forEach(function(e){
                        
                        //TODO: set TA's, cover photo and instructors image
                        e.image = RandomDataGeneratorService.personImagePicker();
                        e.icon = RandomDataGeneratorService.courseIconPicker();
                        e.backgroundColor = RandomDataGeneratorService.courseBackgroundColorPicker();
                    });
                    deferred.resolve(courses);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getCourseForID = function (courseId) {
        var deferred = $q.defer();
        HttpService.get('/courses/' + courseId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                course = data;
                //TODO: add images for TA's inside the loop
                var courseInstructors = course.instructors;
                if(courseInstructors){
                    courseInstructors.forEach(function(e){
                        e.image = RandomDataGeneratorService.personImagePicker();
                    });
                }
                TA = [];
                TA.push({"name": "James Smith", "image": RandomDataGeneratorService.personImagePicker()},
                    {"name": "Mary Anderson", "image": RandomDataGeneratorService.personImagePicker()}
                );              

                course.tas = TA;
                
                course.coverImage = "images/course-cover/computer-3.jpg";
                deferred.resolve(course);   
            });
        return deferred.promise;  
    };

    var createNewCourse = function (data, instructorId) {
        var deferred = $q.defer();
        HttpService.post('/instructors/' + instructorId.replace(/"/g , "") + '/addCourse', data).then(function(response){
            $rootScope.addingNewCourse = false;
            $state.go('website-student.courses');
            deferred.resolve(response);
        }, function(err){
            $rootScope.addingNewCourse = false;
            $state.go('website-student.courses');
        });
        return deferred.promise;
    };

    var registerCourseForStudent = function(studentId, courseId){
        var deferred = $q.defer();
        HttpService.get('/students/' + studentId.replace(/"/g, "") +'/addCourse/' + courseId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                deferred.resolve(course);   
            });
        return deferred.promise;  
    };


    var getCourseStudents = function (courseId) {  
        var deferred = $q.defer();
        HttpService.get('/courses/' + courseId + '/students', {
                "data": null
        }).then(function(data){
            courseStudents = data;
            deferred.resolve(courseStudents);
           
        });
        return deferred.promise;
    };

  
    return {
        getAllCourses: getAllCourses, 
        getCourseForID: getCourseForID,
        createNewCourse: createNewCourse, 
        registerCourseForStudent: registerCourseForStudent, 
        getCourseStudents: getCourseStudents
    };
      
}]);   



},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/InstructorService.js":[function(require,module,exports){
angular.module('app').service('InstructorService', function ($http, $rootScope, HttpService, $q, RandomDataGeneratorService) {

    var instructorData = new Object({});
    var dataFetched = false;
    var instructor = new Object({});
    var courses = new Object({});

    var getAllInstructors = function () {
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(instructorData);
        } else{
            HttpService.get('/instructors', {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": null
            }).then(function(data){
                    instructorData = data;
                    deferred.resolve(instructorData);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getInstructorForId = function (instructorId) {
        var deferred = $q.defer();
        HttpService.get('/instructors/' + instructorId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                instructor = data;
                deferred.resolve(instructor);   
            });
        return deferred.promise;  
    };

    var getInstructorCourses = function (instructorId) {
        var deferred = $q.defer();
        HttpService.get('/instructors/' + instructorId.replace(/"/g , "") + '/courses',{      
            "data": null
        }, false, false, false).then(function(data){
                courses = data;
                if (courses){
                    courses.forEach(function(e){  
                        //TODO: set TA's, cover photo and instructors image
                        e.image = RandomDataGeneratorService.personImagePicker();
                        e.icon = RandomDataGeneratorService.courseIconPicker();
                        e.backgroundColor = RandomDataGeneratorService.courseBackgroundColorPicker();

                    });
                    
                }
                deferred.resolve(courses);   
            });
        return deferred.promise;  
    };

    var createNewAnnouncement = function (params, courseId, instructorId) {
        var deferred = $q.defer();
        HttpService.post('/instructors/' + instructorId.replace(/"/g , "") + '/announcement/'+ courseId.replace(/"/g , ""), params).then(function(response){
            deferred.resolve(response);
        });
        return deferred.promise;
    };


    return {
        getAllInstructors : getAllInstructors, 
        getInstructorForId: getInstructorForId, 
        createNewAnnouncement: createNewAnnouncement, 
        getInstructorCourses: getInstructorCourses
    };

});

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/LoginService.js":[function(require,module,exports){
angular.module('app').service('LoginService',['$http', '$rootScope', 'HttpService', '$q',function ($http, $rootScope, HttpService, $q) {

    var user = new Object({});

    var checkCredentials = function (email, password) {
        var deferred = $q.defer();
        HttpService.get('/users/login', {  
            'email' : email
        }).then(function(data){
                user = data;
                deferred.resolve(user);     
            }, function(data){
                $rootScope.authMsg = true;
                $rootScope.loggingInProgress = false;
            });
        return deferred.promise;
        
    };
  
    return {
        checkCredentials : checkCredentials
    };
      
}]);   



},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/RandomDataGeneratorService.js":[function(require,module,exports){
angular.module('app').service('RandomDataGeneratorService',  function () {

    var images = ["guy-1.jpg", "guy-2.jpg", "guy-3.jpg", "guy-4.jpg", "guy-5.jpg", "guy-6.jpg",  "guy-7.jpg",  "guy-8.jpg", "woman-1.jpg", "woman-2.jpg", "woman-3.jpg", "woman-4.jpg", "woman-5.jpg", "woman-6.jpg", "woman-7.jpg", "woman-8.jpg"];
    var classes = ["primary", "success", "danger", "info", "warning", "purple", "pink-400", "brown"];
    var icons = ["css3", "database", "cube", "code", "cloud-download", "info-circle"];
    var courseImages = ["computer-1.jpg", "computer-2.jpg", "computer-3.jpg", "computer-4.jpg"];

    var timelineUpdateBoxClass = ["timeline","timeline-inverted"];
    var timelineBadges = ["warning", "danger", "info",  "success"];

    var courseIconPickerIndex = -1;
    var personImagePickerIndex = -1;
    var courseBackgroundColorPickerIndex = -1;

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // for TA and instructor images
    var personImagePicker = function() {
       return "images/people/50/" + images[getRandomNumber(0, 15)];
    };

    // for grid course listing     
    var courseIconPicker = function() {
        return "fa-" + icons[getRandomNumber(0, 5)];
    };   
       
    // for grid course listing 
    var courseBackgroundColorPicker = function () {
        return "bg-" + classes[getRandomNumber(0, 7)];   
    };

        // for grid course listing 
    var courseBackgroundImagePicker = function () {
        return "images/course-cover/"+ courseImages[getRandomNumber(0, 3)];   
    };

    var timelineUIGenerator = function(data){
        data.updates.forEach(function(e){
            e.badge = timelineBadges[getRandomNumber(0, 3)];
            e.boxClass = timelineUpdateBoxClass[getRandomNumber(0,1)];
        });
        return data;
    };

    return {
        personImagePicker : personImagePicker,
        courseIconPicker: courseIconPicker,
        courseBackgroundColorPicker: courseBackgroundColorPicker, 
        courseBackgroundImagePicker: courseBackgroundImagePicker, 
        timelineUIGenerator: timelineUIGenerator 
    };

});   
 
},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/StudentService.js":[function(require,module,exports){
angular.module('app').service('StudentService', function ($http, $rootScope, HttpService, $q, RandomDataGeneratorService) {

    var studentData = new Object({});
    var dataFetched = false;
    var fetchedStudentid ='';
    var student = new Object({});

    var getAllStudents = function () {
        var deferred = $q.defer();
        if(dataFetched){
            deferred.resolve(studentData);
        } else{
            HttpService.get('/students', {
                    page: 1,
                    start: 0,
                    "items-per-page": 1000,
                    "run-stateless": "true",
                    "data": null
            }).then(function(data){
                    studentData = data;
                    deferred.resolve(studentData);
                });
            dataFetched = true;
        }
        return deferred.promise;

    };

    var getStudentForId = function (studentId) {
        var deferred = $q.defer();
        HttpService.get('/students/' + studentId.replace(/"/g , ""), {  
            "data": null
        }, false, false, false).then(function(data){
                student = data;
                if (student){
                    student.personImage = RandomDataGeneratorService.personImagePicker();
                    student.courses.forEach(function(e){  
                        //TODO: set TA's, cover photo and instructors image
                        e.image = RandomDataGeneratorService.personImagePicker();
                        e.icon = RandomDataGeneratorService.courseIconPicker();
                        e.backgroundColor = RandomDataGeneratorService.courseBackgroundColorPicker();

                    });
                
                }
                deferred.resolve(student);   
            });
        return deferred.promise;  
    };

    var leaveCourse = function(courseId, studentId){
        var deferred = $q.defer();
        HttpService.get('/students/' + studentId.replace(/"/g , "") + '/removeCourse/' + courseId.replace(/"/g, ""), {  
            "data": null
        }, false, false, false).then(function(data){
                deferred.resolve(data);   
            });
        return deferred.promise;  
    };

    return {
        getAllStudents : getAllStudents, 
        getStudentForId: getStudentForId, 
        leaveCourse: leaveCourse
    };

});

},{}],"/Users/MacbookPro/Desktop/dev/emc/learning-v1.0.0/src/js/themes/angular/angular/services/http-service.js":[function(require,module,exports){
angular.module('app').factory('HttpService', ['$log', '$q', '$http', '$state', '$rootScope', 'CONSTANTS' ,function ($log, $q, $http, $state, $rootScope, CONSTANTS ) {
    
    //TODO: change to the VM base url
    var rest_root = CONSTANTS.rest_url_cors_proxy; 
    var node_root;

    var nodeUrl = function (path) {
        return node_root + path;   
    };

    var restUrl = function (path) {
        return rest_root + path;
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
                return entry.content.properties;
            });
        else if(data.data && data.data.variables){
            return listifyProcessData(data);
        }
    };

    var listifyProcessData = function (processData) {

        if (!processData || !processData.data || !processData.data.variables)
            return;

        processData = processData.data.variables;
        var variableOutputLength = 0;
        var processOutputs = [];
        var variables = _.map(processData, function (value, variable) {
            if(_.isArray(value))
                variableOutputLength = value.length;
            else
                variableOutputLength = 1;

            return variable;
        });

        /* jshint loopfunc:true */
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
        /*jshint esnext: true */
        const hasRawPostData = postData !== undefined;
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
            // what is node and rest? 
            // url: isNode ? nodeUrl(path) : restUrl(path),
            url: restUrl(path),
            data: undefined === postData ? undefined : (hasRawPostData ? postData : $.param(postData)),
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
}]); 



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
