angular.module('testResultService', [])

.factory('TestResults', function($http) {

	// create a new object
	var testResultsFactory = {};

	// get a single test result
	testResultsFactory.get = function(id) {
		return $http.get('/api/test-results/' + id);
	};

	// get all test results
	testResultsFactory.all = function() {
		return $http.get('/api/test-results/');
	};

	// create a test result
	testResultsFactory.create = function(qData) {
		return $http.post('/api/test-results/', qData);
	};

	// update a test result
	testResultsFactory.update = function(id, qData) {
		return $http.put('/api/test-results/' + id, qData);
	};

	// delete a test result
	testResultsFactory.delete = function(id) {
		return $http.delete('/api/test-results/' + id);
	};

	// return our entire testResultsFactory object
	return testResultsFactory;

});
