angular.module('app').service('RandomDataGeneratorService',  function () {

    var images = ["guy-1.jpg", "guy-2.jpg", "guy-3.jpg", "guy-4.jpg", "guy-5.jpg", "guy-6.jpg",  "guy-7.jpg",  "guy-8.jpg", "woman-1.jpg", "woman-2.jpg", "woman-3.jpg", "woman-4.jpg", "woman-5.jpg", "woman-6.jpg", "woman-7.jpg", "woman-8.jpg"];
    var classes = ["primary", "success", "danger", "info", "warning", "purple", "pink-400", "brown"];
    var icons = ["css3", "database", "cube", "code", "cloud-download", "info-circle"];
    var courseImages = ["computer-1.jpg", "computer-2.jpg", "computer-3.jpg", "computer-4.jpg"];

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

    return {
        personImagePicker : personImagePicker,
        courseIconPicker: courseIconPicker,
        courseBackgroundColorPicker: courseBackgroundColorPicker, 
        courseBackgroundImagePicker: courseBackgroundImagePicker  
    };

});   
 