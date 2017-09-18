'use strict';

/**
 * @ngdoc function
 * @name todoAngularFireApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoAngularFireApp
 */
// angular.module('todoAngularFireApp')
app.controller('MainCtrl', function ($scope, dbService) {
  console.log("Main Ctrl");

  $scope.notes = dbService.all;

  $scope.add = function () {
    // console.log(dbService);
    $scope.newList = dbService.all;
    $scope.newList.$add({
      title: $scope.newNote
    });

    alert("Added!");
  };

  $scope.completeNote = function (id) {
    $scope.updateN = dbService.all;
    var upd = $scope.updateN.$getRecord(id);
    upd.completed = true;
    $scope.updateN.$save(upd);
  };

  $scope.delNote = function(id){
    // console.log(id);
    if (confirm("Sure to delete?")) {
      $scope.deleteN = dbService.all;
      var rem = $scope.deleteN.$getRecord(id);
      $scope.deleteN.$remove(rem);
    }
    
  };
});
