'use strict';

/**
 * @ngdoc overview
 * @name todoAngularFireApp
 * @description
 * # todoAngularFireApp
 *
 * Main module of the application.
 */
var app = angular
  .module('todoAngularFireApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ]);

  // app.value('fbURL', 'https://todowistweb-kidocode.firebaseio.com/');
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCAc1NG4nZr1qt4jNGc3lmBloLaVf3c8wg",
    authDomain: "todowistweb-kidocode.firebaseapp.com",
    databaseURL: "https://todowistweb-kidocode.firebaseio.com",
    projectId: "todowistweb-kidocode",
    storageBucket: "todowistweb-kidocode.appspot.com",
    messagingSenderId: "87635243059"
  };
  firebase.initializeApp(config);
  
  app.factory('dbService', function ($firebaseArray, $firebaseObject) {
    var ref = firebase.database().ref();
    var dbRefAll = $firebaseArray(ref)
    var dbService = {
      all: dbRefAll,
      // dbGetTree: function (treeID) { return arrTrees.$getRecord(treeID); }
    };
    return dbService;
  });

  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
