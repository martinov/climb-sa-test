angular.module('resultCtrl', ['testResultService', 'chart.js'])

.controller("TestResultCtrl", function(TestResults, Auth) {
  var vm = this;
  vm.processing = true;
  vm.polarAreaLabels = [];
  vm.polarAreaData = [];

  // see http://jtblin.github.io/angular-chart.js

  TestResults.latest(Auth.getUserId())
    .success(function(data) {
      vm.resultData = data;
      //$log.debug(data);
      vm.processing = false;
      for (var catName in data.result) {
        vm.polarAreaLabels.push(catName);
        vm.polarAreaData.push(data.result[catName]);
      }
    });

  /*
  vm.radarData = [
    [34, 35, 33],
    [29, 25, 23],
    [13, 28, 14]
  ];
  vm.radarSeries = [
    '2015-08-22',
    '2015-02-15',
    '2014-06-25'
  ];
  */

  //$log.debug(Chart.defaults.global.colours);
  vm.colors = [
    '#97BBCD',
    '#FDB45C',
    '#46BFBD'
  ];
});
