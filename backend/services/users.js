const { User } = require('../storage');
const { ValidationError } = require('../error');

async function create(data) {
  const [user, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: data
  });

  if (!created) {
    throw new ValidationError('Email address already in use.');
  }

  delete user.password;

  return { user };
}

async function listAll() {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { users };
}

module.exports = { create, listAll };
