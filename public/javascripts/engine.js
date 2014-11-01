'use strict';
var app = angular.module('tweetForGold', []);

app.controller('IndexCtrl', ['$scope', function($scope) {
  $scope.messages = [];

  var socket = io.connect(window.location.hostname);

  window.socket = socket;

  socket.on('message', function(item) {
    $scope.messages.push(item);
    $scope.$apply();
  })

}]);
