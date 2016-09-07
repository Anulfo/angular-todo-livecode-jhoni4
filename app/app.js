"use strict";
// this is the parent module
var app = angular.module("ToDoApp", ["ngRoute"])
.constant("FirebaseURL", "https://todolist-e2b50.firebaseio.com/");

// angular-route separate angular library. has to be added as a dependency and listed as a third party library
//$q is angular promise
// name of the module is ngRoute. Must inject it and now it's available to us.

// When we talk about routing, we're talking about the URL of the application
let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
    if(AuthFactory.isAuthenticated()) {
        console.log("Authenticated user , Go a head");
        resolve();
    }else {
        console.log("Not Authenticated user , Go a away");
        reject ();
    }
});

app.config(function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when('/login', {
            templateUrl: "partials/login.html",
            controller: "LoginCtrl"
        }).
        when("/items/list", {
            templateUrl: "partials/item-list.html",
            controller: "ItemListCtrl",
            resolve: {isAuth}
        }).
        when("/items/new", {
            templateUrl: "partials/item-form.html",
            controller: "ItemNewCtrl",
            resolve: {isAuth}
        }).
        when("/items/details/:itemId", {
            templateUrl: "partials/item-details.html",
            controller: "ItemViewCtrl",
            resolve: {isAuth}
        }).
        when('/items/view/:itemId/edit', {
          templateUrl: "partials/item-form.html",
          controller: "ItemEditCtrl",
          resolve: {isAuth}
        }).
        otherwise("/");
        // way to make sure they don't go anywhere else.'/'= mean home

});

// when the route is this, use this.
// templateUrl == U is capitalized. everything else isn't
app.run( ($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
    apiKey: creds.key,
    authDomain: creds.authDomain
  };firebase.initializeApp(authConfig);
});
