"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams) {
  $scope.item = [];

  ItemStorage.getItemList()
  .then( (itemCollectionArr) => {
    $scope.item = itemCollectionArr;

    $scope.selectedItem = $scope.item.filter(function(items) {
      return items.id === $routeParams.itemId;
    })[0];
  });
});
