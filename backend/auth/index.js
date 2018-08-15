const passport = require('passport');

const bearerStrategy = require('./bearer.strategy');
const localStrategy = require('./local.strategy');

module.exports = {
  initialize: app => {
    app.use(passport.initialize());
    passport.use(bearerStrategy);
    passport.use(localStrategy);
  },
  needsAuth: () => passport.authenticate('bearer', { session: false }),
  doLocalAuth: () => passport.authenticate('local', { session: false })
};
