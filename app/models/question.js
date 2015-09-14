var mongoose	= require('mongoose'),
		Schema 		= mongoose.Schema;

// question schema
var QuestionSchema = new Schema({
	num:			{ type: Number, required: true },
	question:	{ type: String, required: true },
	category:	{ type: String, required: true }
});

module.exports = mongoose.model('Question', QuestionSchema);
