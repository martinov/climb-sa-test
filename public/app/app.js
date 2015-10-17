angular
	.module('climbSATestApp', [
		'ngAnimate',
		'ngMaterial',
		'app.ui.routes',
		'authService',
		'mainCtrl',
		'navCtrl',
		'userCtrl',
		'userService',
		'questionCtrl',
		'chart.js'
	])

	// application configuration to integrate token into requests
	.config(function($httpProvider, $mdThemingProvider, $mdIconProvider) {

    // attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');

		$mdIconProvider
		//.defaultIconSet("./assets/svg/avatars.svg", 128)
		.icon("menu", "./assets/svg/menu.svg", 24);

		// change some theming options
		$mdThemingProvider.theme('default')
      .primaryPalette('lime')
      .accentPalette('amber');

	})
	.controller("PolarAreaCtrl", function ($scope) {
		// see http://jtblin.github.io/angular-chart.js
		$scope.labels = [
			"Mental",
			"Technique and tactics",
			"Physical"
		];
		$scope.data = [34, 35, 33 ];
		$scope.radarData = [
			[34, 35, 33],
			[29, 25, 23],
			[13, 28, 14]
		];
		$scope.radarSeries = [
			'2015-08-22',
			'2015-02-15',
			'2014-06-25'
		]
	});
