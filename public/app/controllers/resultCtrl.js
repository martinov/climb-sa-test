angular.module('resultCtrl', ['testResultService', 'chart.js'])

.controller("TestResultCtrl", function($scope, TestResults) {
  // see http://jtblin.github.io/angular-chart.js
  //$log.debug(Chart.defaults.global.colours);
  $scope.labels = [
    "Mental",
    "Technique and tactics",
    "Physical"
  ];
  $scope.data = [24, 35, 33];
  $scope.radarData = [
    [34, 35, 33],
    [29, 25, 23],
    [13, 28, 14]
  ];
  $scope.radarSeries = [
    '2015-08-22',
    '2015-02-15',
    '2014-06-25'
  ];
  $scope.colors = [
    '#97BBCD',
    '#FDB45C',
    '#46BFBD'
  ];
});
