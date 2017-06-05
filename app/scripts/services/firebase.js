'use strict';

/**
 * @ngdoc service
 * @name frontEndApp.firebase
 * @description
 * # firebase
 * Service in the frontEndApp.
 */
angular.module('frontEndApp')
  .service('firebase', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDr_NN_c_lkltH4S7w-BMs0kke4v0_q1w4",
      authDomain: "adaptive-561d7.firebaseapp.com",
      databaseURL: "https://adaptive-561d7.firebaseio.com",
      storageBucket: "adaptive-561d7.appspot.com",
      messagingSenderId: "398736739841"
    };
    firebase.initializeApp(config);

    return firebase;
    
  });
//lineas 10