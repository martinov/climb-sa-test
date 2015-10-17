angular.module('questionCtrl', ['questionService'])

.controller('questionController', function(TestQuestions, $log) {
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

  /*
  vm.questions = [{
    num: 13,
    title: 'I make excuses for why I might fail on a route before I even begin to climb.',
    answer: ''
  }, {
    num: 14,
    title: 'I grab quick draws, the rope, or other gear instead of risking a fall trying a hard move of which I am unsure.',
    answer: ''
  }];
  $log.debug(vm.questions);
  */

  vm.answers = [
    { value: 0, label: 'almost always' },
    { value: 1, label: 'often' },
    { value: 2, label: 'about half the time' },
    { value: 3, label: 'occasionally' },
    { value: 4, label: 'seldom' },
    { value: 5, label: 'never' }
  ];

  vm.submit = function() {
    alert('submit');
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
