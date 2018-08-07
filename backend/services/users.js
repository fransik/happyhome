const { User } = require('../storage');

async function listAll() {
  const users = await User.findAll();
  return { users };
}

module.exports = { listAll };
