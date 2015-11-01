angular.module('questionCtrl', ['questionService', 'testResultService'])

.controller('questionController', function(TestQuestions, TestResults, Auth, $state) {
  var vm = this;
  vm.currentNum = 1;
  vm.totalNum = 0;
  vm.question = {};

  // set a processing variable to show loading things
	vm.processing = true;

	// grab all the questions at page load
	TestQuestions.all()
		.success(function(data) {

			// when all the questions come back, remove the processing variable
			vm.processing = false;

			// bind the questions that come back to vm.questions
			vm.questions = data;
      vm.totalNum = data.length;
      vm.question = vm.questions[vm.currentNum - 1];
		});

  vm.answers = [
    { value: 0, label: 'almost always' },
    { value: 1, label: 'often' },
    { value: 2, label: 'about half the time' },
    { value: 3, label: 'occasionally' },
    { value: 4, label: 'seldom' },
    { value: 5, label: 'never' }
  ];

  vm.submit = function() {
    vm.processing = true;

    var testResult = {
      user_id: Auth.getUserId(),
      answers: []
    };

    // Loop the questions to fill in answers in the testResult document.
    for (var i = 0; i < vm.totalNum; i++) {
      testResult.answers[i] = {
        question_id: vm.questions[i]._id,
        answer: vm.questions[i].answer,
        category: vm.questions[i].category
      };
    }

    TestResults.create(testResult)
      .success(function(data) {
        vm.processing = false;
        $state.go('result');
      });
  };

  vm.nextQuestion = function() {
    if (vm.currentNum < vm.questions.length) vm.currentNum++;
    vm.question = vm.questions[vm.currentNum - 1];
  };

  vm.prevQuestion = function() {
    if (vm.currentNum > 1) vm.currentNum--;
    vm.question = vm.questions[vm.currentNum - 1];
  };

});
