'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])



.controller('View1Ctrl', function($scope, $http) {
  $http.get("search.json")
  .success(function (response) {
    $scope.doctors = response.professionals;
  });
  $scope.$on('mapInitialized', function(event, map) {
    map.setCenter(41,-87 )
  });
});



