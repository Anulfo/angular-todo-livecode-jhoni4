"use strict";

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [
        {name: "Logout"},
        {name: "All Items"},
        {name: "New Items"}
    ];
});
//this is sharing data with the view. All navItems are avaliale in the HTML to be used. Anywhere wtih in the nav tags can make an expression to bind to the nav controller. Cannot call anything outside the scope of the controller. For example, you cannot call anything nav outside the divs the nav is located.



