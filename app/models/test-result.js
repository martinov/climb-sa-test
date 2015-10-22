var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// test result schema
var TestResultSchema = new Schema({
  user_id: Schema.Types.ObjectId,
  dateStart: { type: Date, default: Date.now },
  dateComplete: { type: Date },
  answers: [{
    question_id: Schema.Types.ObjectId,
    answer: { type: Number, min: 0, max: 5 },
    category:	{ type: String }
  }],
	result: {
    mental: Number,
    tech: Number,
    physical: Number
  }
});

module.exports = mongoose.model('TestResult', TestResultSchema);
