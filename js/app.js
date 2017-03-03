var app = angular.module("myApp", 
["ngRoute",
 '720kb.datepicker',
 'angular-carousel',
 'ngMap',
 'uiGmapgoogle-maps']);

var URL = 'http://188.166.54.28/api/v1.0/'



/*!
 * Service where the data from the server is saved
 * Meal plan and price the user choses is saved here
 * This is used to achive multiple pages layout
 */
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl         : "templates/main.html"
    })
    .when("/hotel-listing", {
        templateUrl         : "templates/hotelListing.html",
        controller          : 'hotelListing'
    })
    .when("/hotel-info/:hotelID/:roomID", {
        templateUrl         : "templates/hotelInfo.html",
        controller          : 'hotelInfo'
    })
    .when("/book-now/:hotelID/:roomID", {
        templateUrl         : "templates/book.html",
        controller          : 'book'
    })

    // Static routes
    .when("/about", {
        templateUrl         : "templates/static/about.html",
    })
    .when("/house-maintenance", {
        templateUrl         : "templates/static/house.html",
    })
    .when("/sales", {
        templateUrl         : "templates/static/sales.html",
    })
    .when("/history", {
        templateUrl         : "templates/static/history.html",
    })
    .when("/coulture", {
        templateUrl         : "templates/static/coulture.html",
    })
    .when("/events", {
        templateUrl         : "templates/static/events.html",
    })
    .when("/activities", {
        templateUrl         : "templates/static/activities.html",
    })
    .when("/to-skopelos", {
        templateUrl         : "templates/static/toSkopelos.html",
    })
    .when("/around-skopelos", {
        templateUrl         : "templates/static/aroundSkopelos.html",
    })
});