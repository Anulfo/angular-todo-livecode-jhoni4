'use strict';

app.controller("LoginCtrl", function($scope, $window, AuthFactory) {
  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    AuthFactory.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    })
    .then( (userData) => {
      console.log("new user", userData);
      $scope.logIn();
    }, (error) => {
      console.log(`Error creating user: ${error}`);
    });
  };

  $scope.logIn = () => {
    console.log("you clicked login");
    AuthFactory.loginUser($scope.account)
    .then( (data) => {
      if (data) {
        $window.location.href = "#/items/list";
      } else {
        $window.location.href = "#/login";
        console.log("Error logging in, man");
      }
    });
  };
  $scope.logOut = () => {
    console.log("you clicked logOut");
    AuthFactory.logoutUser($scope.account)
    .then( (data) => {
      // $scope.addclassList = 'hide';
    // $('.btnLogout').classList.add('hide');
      console.log("you are logged out, man");
    });
  };


});

// Get elements
// var txtEmail = $('#txtEmail');
// var txtPassword = $('#txtPassword');
// // var btnLogin = $('#btnLogin');
// // var btnSignup = $('#btnSignup');
// // var btnLogout = $('#btnLogout');

// //add login event
// $('#btnLogin').click( (e) => {
//   console.log("login clicked");
//   console.log("txtEmail", txtEmail);
//   //get email and pass
//   var email = txtEmail.val();
//   var pass = txtPassword.val();
//   var auth = firebase.auth();
//   console.log("email", email);
//   //sign in
//   var promise = auth.signInWithEmailAndPassword(email, pass);
//     promise.catch( (e) => {
//       console.log(e.message);
//     });

// });


// //add sign up function
// $('#btnSignup').click( (e) => {
//   console.log("sign up clicked");
//   //get email and pass
//   var email = txtEmail.val();
//   var pass = txtPassword.val();
//   var auth = firebase.auth();
//   //sign in
//   var promise = auth.creatUserWithEmailAndPassword(email, pass);
//     promise
//     // .then(user => console.log(user))
//       .catch( (e) => console.log(e.message));
// });
// //log out
// $('#btnLogout').click( (e) => {
//   firebase.auth().signOut();
// });

//  //add real time listener
 // firebase.auth().onAuthStateChanged( (firebaseUser) => {
 //   if(firebaseUser) {
 //    console.log(firebaseUser);
 //    $('.btnLogout').classList.remove('hide');
 //   }
 //   else {
 //    console.log('not loged in');
 //    $('.btnLogout').classList.add('hide');
 //   }
 // });

