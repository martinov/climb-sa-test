var mongoose	= require('mongoose'),
		Schema 		= mongoose.Schema;

// clmbder signup schema
var ClimbderSignupSchema = new Schema({
	email: { type: String, required: true },
	dateSignup: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ClmibderSignup', ClimbderSignupSchema);
