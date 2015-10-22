var fsRotator = require('file-stream-rotator'),
    fs = require('fs')
    morgan = require('morgan'),
    config = require('../../config');

module.exports = function(app) {
  // ensure log directory exists
  fs.existsSync(config.logDir) || fs.mkdirSync(config.logDir);

  // create a rotating write stream
  var accessLogStream = fsRotator.getStream({
    filename: config.logDir + '/access-%DATE%.log',
    frequency: 'daily',
    verbose: false,
    date_format: "YYYY-MM-DD"
  });

  // setup the logger
  var myMorgan = config.env === 'dev' ? morgan(config.env) :
    morgan('combined', {stream: accessLogStream});
  app.use(myMorgan);
}
