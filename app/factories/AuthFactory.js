'use strict';

app.factory("AuthFactory", function() {
  let createUser = function(userObj) {
    return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };

  let loginUser = function(userObj) {
    return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
    .catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
    });
  };

  let isAuthenticated = function() {
    return (firebase.auth().currentUser) ? true : false;
  };

  let logoutUser = function () {
    return firebase.auth().signOut();
  };


  return {createUser, loginUser, logoutUser, isAuthenticated};

});
