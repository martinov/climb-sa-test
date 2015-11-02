var should = require('chai').should();
var request = require('request');

describe("REST API", function() {

  var apiURL = 'http://localhost:8080/api';

  describe("General connectivity", function() {

    it("needs an auth token to let you make requests", function(done) {
      request(apiURL, function(err, res, body) {
        if (err) return done(err);
        res.statusCode.should.equal(403);
        JSON.parse(body).should.have.property('success', false);
        done();
      });
    });

    describe('Authentication', function() {
      var token = '';

      it("shows an error message for incorrect credentials", function(done) {
        var apiOpts = {
          url: apiURL + '/authenticate',
          method: 'POST',
          form: { 'username': 'user', 'password': 'wrongpass' }
        };
        request(apiOpts, function(err, res, body) {
          if (err) return done(err);
          var result = JSON.parse(body);
          result.should.have.property('success', false);
          result.should.not.have.property('token');
          done();
        });
      });

      it("returns a token for correct credentials", function(done) {
        var apiOpts = {
          url: apiURL + '/authenticate',
          method: 'POST',
          form: { 'username': 'martin', 'password': 'supersecret' }
        };
        request(apiOpts, function(err, res, body) {
          if (err) return done(err);
          var result = JSON.parse(body);
          res.statusCode.should.equal(200);
          result.should.have.property('success', true);
          result.should.have.property('token');
          token = result.token;
          done();
        });
      });

      it("spits out a greeting message", function(done) {
        var apiOpts = {
          url: apiURL,
          headers: {
            'x-access-token': token
          }
        };
        request(apiOpts, function(err, res, body) {
          if (err) return done(err);
          res.statusCode.should.equal(200);
          JSON.parse(body).should.have.property('message')
            .and.contain('hooray!');
          done();
        });
      });

    });

  });

  it("should have more tests");

});
