var app = angular.module('MyApp');

app.controller('AppCtrl', ['$scope', '$interval',
    function($scope, $interval) {
        
      $scope.showSpinner = false;
    }
  ]);

