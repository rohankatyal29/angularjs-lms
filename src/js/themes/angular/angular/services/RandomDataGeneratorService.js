angular.module('app').service('RandomDataGeneratorService', function ($http, $rootScope) {

    function getRandomNumber(Max, Min){
        return Math.floor(Math.random() * (Max - Min + 1)) + Min;
    }

    // for TA and instructor images
    var personImagePicker = function() {
        var images = ["guy-1.jpg", "guy-2.jpg", "guy-3.jpg", "guy-4.jpg", "guy-5.jpg", "guy-6.jpg",  "guy-7.jpg",  "guy-8.jpg", "woman-1.jpg", "woman-2.jpg", "woman-3.jpg", "woman-4.jpg", "woman-5.jpg", "woman-6.jpg", "woman-7.jpg", "woman-8.jpg"];
        return "images/people/50/" + images[getRandomNumber(15,0)];
    };

    // for grid course listing 
    var courseIconPicker = function() {
        var icons = ["css3", "github", "windows", "wordpress", "jsfiddle", "cc-visa"];
        return "fa-" + icons[getRandomNumber(5,0)];
    };

    // for grid course listing 
    var courseBackgroundColorPicker = function () {
        var classes = ["primary", "success", "danger", "info", "warning"];
        return "bg-" + classes[getRandomNumber(4,0)];
    };

    return {
        personImagePicker : personImagePicker,
        courseIconPicker: courseIconPicker,
        courseBackgroundColorPicker: courseBackgroundColorPicker
    };

});
