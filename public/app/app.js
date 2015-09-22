angular
	.module(
		'userApp',
		['ngAnimate', 'ngMaterial', 'app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService']
	)

	// application configuration to integrate token into requests
	.config(function($httpProvider, $mdThemingProvider) {

		// attach our auth interceptor to the http requests
		$httpProvider.interceptors.push('AuthInterceptor');

		$mdThemingProvider.theme('default')
      .primaryPalette('lime')
      .accentPalette('light-green');

	});
