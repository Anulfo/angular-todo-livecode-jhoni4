'use strict';

app.controller("ItemEditCtrl",function($scope, ItemStorage, $routeParams, $location) {
  $scope.title = "Edit Item";
  $scope.btnText = "update";
  $scope.newTask = {};


ItemStorage.getSingleItem($routeParams.itemId)
.then( (response) => {
  $scope.newTask = response;
});

$scope.addNewItem = () => {
  ItemStorage.updateItem($routeParams.itemId, $scope.newTask)
  .then( (response) => {
    $location.url("/items/list");
  });
};




});






//my way starts here
//   $scope.editTask = {
//     assignedTo: "",
//     dependencies: "",
//     dueDate: "",
//     isCompleteed: "",
//     location: "",
//     task: "",
//     urgrncy: ""
//   };


//  $scope.editItem = function(itemId) {
//   ItemStorage.putEditedItem($routeParams.itemId)
//   .then(function(data) {
//     $scope.editTask = data;
//     $location.url("/item/list");
//   });
// };

  // ItemStorage.getItemList()
  // .then( (itemCollectionArr) => {
  //   $scope.item = itemCollectionArr;

  //   $scope.selectedItem = $scope.item.filter(function(items) {
  //     return items.id === $routeParams.itemId;
  //   })[0];
  // });

  // $scope.editItem = function(itemId) {
  //   ItemStorage.getSingleItem($routeParams.itemId)
  //   .then(function(itemObject) {
  //     $scope.editTask = itemObject;
  //   })
  //   .then(function (itemObject) {
  //     ItemStorage.putEditedItem(itemObject);
  //   });
  // };
// $scope.editClicked = (itemId) => {
//     console.log("itemId", itemId);
//     ItemStorage.getSingleItem(itemId)
//     .then( (itemObject) => {
//       $scope.items = itemObject;
//       console.log("itemObject", itemObject);
//     // $location.url("/item/details");
//       // ItemStorage.putEditedItem();
//     });
//   };



