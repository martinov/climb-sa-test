/**
 * Climbing Performance Assessment
 */
var express = require('express'),
    app = express(),
    config = require('./config'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path');

// APP CONFIGURATION
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
	next();
});

// log all requests to the console if config.env is dev
var morgan = require('./app/lib/morgan')(app);

// connect to database
mongoose.connect(config.database);

// set static files location used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// API ROUTES
var apiRoutes = require('./app/routes/api')(app, express);
app.use('/api', apiRoutes);

// Main catchall route
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START THE SERVER
app.listen(config.port);
console.log('Magic happens on http://localhost:' + config.port);
