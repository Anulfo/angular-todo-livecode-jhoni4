'use strict';

app.controller("ItemListCtrl", function($scope, ItemStorage, searchTermData) {
  $scope.searchText = searchTermData;

 ItemStorage.getItemList()
 .then((itemCollectionArr) => {
  console.log("itemCollectionArr", itemCollectionArr);
  $scope.items = itemCollectionArr;
  console.log("$scope.items", $scope.items);
 });

 $scope.itemDelete = (itemId) => {
  ItemStorage.deleteItem(itemId)
  .then( (response) => {
    ItemStorage.getItemList()
    .then( (itemCollectionArr) => {
      $scope.items = itemCollectionArr;
    });
  });
 };
});
