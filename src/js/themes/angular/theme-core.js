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




