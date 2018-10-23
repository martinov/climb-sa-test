/**
 * Climbing Performance Assessment
 */
var express = require('express'),
  cors = require('cors');
(app = express()),
  (config = require('./config')),
  (bodyParser = require('body-parser')),
  (mongoose = require('mongoose')),
  (path = require('path'));

// APP CONFIGURATION
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var corsOptions = {
  origin: 'http://localhost:8080'
};
app.use(cors(corsOptions));

// configure our app to handle CORS requests
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type, Authorization'
  );
  next();
});

// log all requests to the console if config.env is dev
var morgan = require('./app/lib/morgan')(app);

// connect to database
mongoose.connect(config.database);

// set static files location used for requests that our frontend will make
app.use(express.static(__dirname + '/public'));

// API ROUTES
var apiRoutes = require('./app/routes/api')(app);
app.use('/api', apiRoutes);

// route to collect email subscriptions
app.post('/climbder-signup', function(req, res) {
  if (req.body.subscribe_email.length > 0) {
    var ClimbderSignup = require('./app/models/climbder-signup');
    var signup = new ClimbderSignup();
    signup.email = req.body.subscribe_email;

    signup.save(function(err) {
      if (err) return res.send(err);

      res.json({ message: 'Email saved!' });
    });
  }
});

// Main catchall route
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// START THE SERVER
app.listen(config.port, () => {
  console.log(`Magic happens on http://localhost:${config.port}`);
});
