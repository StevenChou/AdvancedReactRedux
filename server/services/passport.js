const passport = require('passport');
const User = require('./../models/user');
const config = require('./../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
const localOption = { usernameField: 'email' }; // 變更預設欄位
const localLogin = new LocalStrategy(localOption, function(
  email,
  password,
  done
) {
    // Verify this username and password, call done with the user
    // if it is the correct username and password
    // otherwise, call done with false
});

// Setup option for JWT Strategy
// 從哪裡解？  怎麼解？
const jwtOption = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

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
passport.use(jwtLogin);
