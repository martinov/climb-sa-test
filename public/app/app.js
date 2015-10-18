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
		.icon("menu", "./assets/svg/menu.svg", 24);

		// change some theming options
		$mdThemingProvider.theme('default')
      .primaryPalette('lime')
      .accentPalette('amber');

	});
