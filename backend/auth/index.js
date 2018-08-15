const passport = require('passport');

const localStrategy = require('./local.strategy');

module.exports = {
  initialize: app => {
    app.use(passport.initialize());
    passport.use(localStrategy);
  },
  passport
};
