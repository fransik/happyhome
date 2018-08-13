const { User } = require('../database');
const { AlreadyExistsError } = require('../error');

async function create(data) {
  const [userObj, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: data
  });

  if (!created) {
    throw new AlreadyExistsError('Email address already in use');
  }

  const user = userObj.get();
  delete user.password;

  return { user };
}

async function listAll() {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { users };
}

module.exports = { create, listAll };
