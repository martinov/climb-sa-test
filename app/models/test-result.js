var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// test result schema
var TestResultSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  dateComplete: { type: Date, default: Date.now },
  answers: [{
    question_id: Schema.Types.ObjectId,
    answer: { type: Number, min: 0, max: 5 },
    category:	{ type: String }
  }],
	result: {
    'Mental': Number,
    'Physical': Number,
    'Technique and tactics': Number
  }
});

// Calculate the results for each category
TestResultSchema.pre('save', function(next) {
  var testRes = this;
  var results = {
    'Mental' : 0,
    'Physical' : 0,
    'Technique and tactics' : 0
  };

  var answersLength = testRes.answers.length;
  if (!answersLength) return next();

  for (var i = 0; i < answersLength; i++) {
    if (testRes.answers[i].answer != undefined) {
      results[testRes.answers[i].category] += testRes.answers[i].answer;
    }
  }
  testRes.result = results;
	next();
});

module.exports = mongoose.model('TestResult', TestResultSchema);
