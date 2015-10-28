angular.module('mainCtrl', [])

.controller('mainController', function(
	$rootScope,
	$state,
	Auth,
	$mdUtil,
	$mdSidenav,
	$log) {

	var vm = this;

	// get info if a person is logged in
	vm.loggedIn = Auth.isLoggedIn();
	vm.isAdmin = false;

	// check to see if a user is logged in on every request
	$rootScope.$on('$stateChangeStart', function() {
		vm.loggedIn = Auth.isLoggedIn();

		// get user information on page load
		Auth.getUser()
			.then(function(data) {
				vm.user = data.data;
				if (vm.user.username == 'martin') {
					vm.isAdmin = true;
				}
			});
	});

	// function to handle login form
	vm.doLogin = function() {
		vm.processing = true;

		// clear the error
		vm.error = '';

		Auth.login(vm.loginData.username, vm.loginData.password)
			.success(function(data) {
				vm.processing = false;
				var destination = vm.loginData.username == 'martin' ? 'users' : 'test';

				// if a user successfully logs in, redirect to users page
				if (data.success)
					$state.go(destination);
				else
					vm.error = data.message;

			});
	};

	// function to handle logging out
	vm.doLogout = function() {
		Auth.logout();
		vm.user = '';

		$state.go('login');
		$mdSidenav('left').close();
	};

	vm.createSample = function() {
		Auth.createSampleUser();
	};

	vm.toggleLeft = buildToggler('left');
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildToggler(navID) {
    var debounceFn = $mdUtil.debounce(function() {
			$mdSidenav(navID)
        .toggle()
				.then(function () {
          $log.debug("toggle " + navID + " is done");
        });
    }, 200);
    return debounceFn;
  }

});
