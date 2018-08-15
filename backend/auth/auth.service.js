const crypto = require('crypto');

const { database, Session } = require('../database');

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

module.exports = { generateAndStoreToken };
