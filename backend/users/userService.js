const bcrypt = require('bcryptjs');

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

function findByEmail(email) {
  return User.findOne({ where: { email } });
}

async function findByCredentials(email, password) {
  const userObj = await findByEmail(email);

  if (userObj) {
    const user = userObj.get();
    const correctPassword = await bcrypt.compare(password, user.password);
    delete user.password;

    if (correctPassword) {
      return user;
    }
  }
}

module.exports = { create, listAll, findByCredentials };
