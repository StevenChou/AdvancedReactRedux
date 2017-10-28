const passport = require('passport');
const User = require('./../models/user');
const config = require('./../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup option for JWT Strategy
const jwtOption = {};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOption, function(payload, done) {
  // See if the user ID in the payload exists in your database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object

  User.findById(payload.sub, function(err, user) {
    if (err) {
      return done(err, false);
    }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy