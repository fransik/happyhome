const crypto = require('crypto');

const { database, Session } = require('../database');
const { UnauthorizedError } = require('../error');

function generateAsyncToken(length = 32) {
  return new Promise((resolve, reject) => {
    crypto.randomBytes(length, (err, buf) => {
      if (err) {
        reject(err);
      }
      resolve(buf.toString('hex'));
    });
  });
}

async function generateAndStoreToken(userId) {
  const accessToken = await generateAsyncToken();

  await database.transaction(async t => {
    const session = await Session.create({ accessToken }, { transaction: t });
    return session.update({ userId }, { transaction: t });
  });

  return accessToken;
}

function needsAdmin(req, res, next) {
  if (req.user.role === 'admin') {
    return next();
  }

  throw new UnauthorizedError();
}

module.exports = { generateAndStoreToken, needsAdmin };
