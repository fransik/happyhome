const { Strategy } = require('passport-local');

const { findByCredentials } = require('../users/user.service');

module.exports = new Strategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await findByCredentials(email, password);

      if (user) {
        return done(null, user);
      }

      return done(null, false);
    } catch (e) {
      return done(e);
    }
  }
);
