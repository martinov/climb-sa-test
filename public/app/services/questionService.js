angular.module('questionService', [])

.factory('TestQuestions', function($http) {

	// create a new object
	var questionsFactory = {};

	// get a single question
	questionsFactory.get = function(id) {
		return $http.get('/api/questions/' + id);
	};

	// get all questions
	questionsFactory.all = function() {
		return $http.get('/api/questions/');
	};

	// create a question
	questionsFactory.create = function(qData) {
		return $http.post('/api/questions/', qData);
	};

	// update a question
	questionsFactory.update = function(id, qData) {
		return $http.put('/api/questions/' + id, qData);
	};

	// delete a question
	questionsFactory.delete = function(id) {
		return $http.delete('/api/questions/' + id);
	};

	// return our entire questionsFactory object
	return questionsFactory;

});
