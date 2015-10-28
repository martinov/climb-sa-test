var mongoose	= require('mongoose'),
		Schema 		= mongoose.Schema;

// clmbder signup schema
var ClimbderSignupSchema = new Schema({
	email: { type: String, required: true }
});

module.exports = mongoose.model('ClmibderSignup', ClimbderSignupSchema);
