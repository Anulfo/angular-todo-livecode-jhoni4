'use strict';
//itemListCtrl.js

app.controller("ItemListCtrl", function($scope, ItemStorage, searchTermData) {
  $scope.searchText = searchTermData;
  let user = $scope.$parent.getUser();

 ItemStorage.getItemList(user)
 .then((itemCollectionArr) => {
  // console.log("itemCollectionArr", itemCollectionArr);
  $scope.items = itemCollectionArr;
  // console.log("$scope.items", $scope.items);
 });

  $scope.itemDelete = (itemId) => {
    ItemStorage.deleteItem(itemId)
    .then( (response) => {
      ItemStorage.getItemList(user)
      .then( (itemCollectionArr) => {
        $scope.items = itemCollectionArr;
      });
    });
    };

});


