angular.module('questionCtrl', ['questionService', 'testResultService'])

.controller('questionController', function(TestQuestions, TestResults, $log) {
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
      //$log.debug(data);
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
    var testResult = {
      user_id: '56253591eeb6ea6831c960dc',
      answers: [{
        question_id: vm.question._id,
        answer: vm.question.answer,
        category:	vm.question.category
      }],
      result: {
        mental: 42,
        tech: 24,
        physical: 33
      }
    };
    TestResults.create(testResult);
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
