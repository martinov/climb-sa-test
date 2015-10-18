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
		'resultCtrl'
	])

	// application configuration to integrate token into requests
	.config(function($httpProvider, $mdThemingProvider, $mdIconProvider) {

    // attach our auth interceptor to the http requests
    $httpProvider.interceptors.push('AuthInterceptor');

		$mdIconProvider
			//.defaultIconSet("./assets/svg/avatars.svg", 128)
			.icon("account-box", "./assets/svg/ic_account_box_black_24px.svg", 24)
			.icon("assessment", "./assets/svg/ic_assessment_black_24px.svg", 24)
			.icon("assignment", "./assets/svg/ic_assignment_black_24px.svg", 24)
			.icon("close", "./assets/svg/ic_close_black_24px.svg", 24)
			.icon("home", "./assets/svg/ic_home_black_24px.svg", 24)
			.icon("menu", "./assets/svg/menu.svg", 24);

		// change some theming options
		$mdThemingProvider.theme('default')
      .primaryPalette('lime')
      .accentPalette('light-green');

	});
