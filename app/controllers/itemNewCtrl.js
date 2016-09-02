'use strict';

app.controller("ItemNewCtrl",function($scope,ItemStorage, $location) {
  $scope.newTask = {
    assignedTo: "",
    dependencies: "",
    dueDate: "",
    isCompleteed: "",
    location: "",
    task: "",
    urgrncy: ""
  };


$scope.addNewItem = function() {
  ItemStorage.postNewItem($scope.newTask)
  .then(function() {
    $location.url("/item/list");
  });
};
});
