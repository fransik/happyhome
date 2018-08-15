const { Strategy } = require('passport-http-bearer');

const { findByToken } = require('../users/userService');

module.exports = new Strategy(async (token, done) => {
  try {
    const user = await findByToken(token);

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  } catch (e) {
    return done(e);
  }
});
