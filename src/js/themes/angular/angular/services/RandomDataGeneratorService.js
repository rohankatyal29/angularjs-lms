angular.module('app').service('RandomDataGeneratorService',  function () {

    var images = ["guy-1.jpg", "guy-2.jpg", "guy-3.jpg", "guy-4.jpg", "guy-5.jpg", "guy-6.jpg",  "guy-7.jpg",  "guy-8.jpg", "woman-1.jpg", "woman-2.jpg", "woman-3.jpg", "woman-4.jpg", "woman-5.jpg", "woman-6.jpg", "woman-7.jpg", "woman-8.jpg"];
    var classes = ["primary", "success", "danger", "info", "warning"];
    var icons = ["css3", "github", "windows", "wordpress", "jsfiddle", "cc-visa"];

    var courseIconPickerIndex = -1;
    var personImagePickerIndex = -1;
    var courseBackgroundColorPickerIndex = -1;

    // for TA and instructor images
    var personImagePicker = function() {
       personImagePickerIndex = personImagePickerIndex >= 15 ? 0 : (personImagePickerIndex + 1);      
       // return "images/people/50/" + images[personImagePickerIndex];
        return "images/people/50/guy-1.jpg";
    };

    // for grid course listing     
    var courseIconPicker = function() {
        courseIconPickerIndex = courseIconPickerIndex >= 5 ? 0 : (courseIconPickerIndex + 1) ;
        // return "fa-" + icons[courseIconPickerIndex];
        return "fa-windows";
    };   
       
    // for grid course listing 
    var courseBackgroundColorPicker = function () {
        courseBackgroundColorPickerIndex = courseBackgroundColorPickerIndex >= 4 ? 0 : (courseBackgroundColorPicker + 1) ;
        return "bg-" + classes[courseBackgroundColorPickerIndex];
    };

    return {
        personImagePicker : personImagePicker,
        courseIconPicker: courseIconPicker,
        courseBackgroundColorPicker: courseBackgroundColorPicker
    };

});   
 