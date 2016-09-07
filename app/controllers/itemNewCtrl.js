'use strict';

app.controller("ItemNewCtrl", function($scope, ItemStorage, $location) {
  $scope.title = "Add a new task";
  $scope.btnText = "save a new task";

  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleteed: "false",
    location: "",
    task: "",
    urgrncy: "normal",
    uid: $scope.$parent.getUser() //angular way to get data from another controller
  };


$scope.addNewItem = function() {
  ItemStorage.postNewItem($scope.newTask)
  .then(function() {
    $location.url("/items/list");
  });
};
});

