angular.module('app.ui.routes', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/home');
	$stateProvider

		.state('home', {
			url: '/home',
			templateUrl: 'app/views/pages/home.html',
			controller: function($scope) {
				$scope.imagePath = 'https://c1.staticflickr.com/1/517/19827270506_f41b700994_d.jpg';
			}
		})

		.state('test', {
			url: '/test',
			templateUrl: 'app/views/pages/test.html'
		})

		.state('result', {
			url: '/result',
			templateUrl: 'app/views/pages/result.html',
			controller: 'PolarAreaCtrl'
		})

		// login page
		.state('login', {
			url: '/login',
			templateUrl : 'app/views/pages/login.html',
 			controller  : 'mainController',
			controllerAs: 'login'
		})

		// show all users
		.state('users', {
			url: '/users',
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.state('users.create', {
			url: '/users/create',
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.state('users-edit', {
			url: '/users/:user_id',
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		});

});
