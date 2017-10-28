const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

// try to make cookie based session
// 使用 jwt 策略，作為驗證
const requireAuth = passport.authenticate('jwt', { session: false });
// 使用 local 策略，作為驗證
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  // app.get('/', requireAuth, function(req, res) {
  //   res.send({ hi: 'there' });
  // });
  app.post('signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
};
