"use strict";

app.controller("ItemViewCtrl", function($scope, ItemStorage, $routeParams) {
  $scope.item = [];

  ItemStorage.getItemList($scope.$parent.getUser())
  .then( (itemCollectionArr) => {
    $scope.item = itemCollectionArr;

    $scope.selectedItem = $scope.item.filter(function(item) {
      return item.id === $routeParams.itemId;
    })[0];
  });



});
