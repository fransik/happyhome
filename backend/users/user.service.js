const bcrypt = require('bcryptjs');

const { User, Session } = require('../database');
const { AlreadyExistsError } = require('../error');

async function create(data) {
  const [user, created] = await User.findOrCreate({
    where: { email: data.email },
    defaults: data
  });

  if (!created) {
    throw new AlreadyExistsError('Email address already in use');
  }

  return user;
}

async function listAll() {
  const users = await User.findAll();
  return { users };
}

function findByEmail(email) {
  return User.findOne({ where: { email, active: true } });
}

async function findByCredentials(email, password) {
  const user = await findByEmail(email);

  if (user) {
    const correctPassword = await bcrypt.compare(password, user.password());

    if (correctPassword) {
      return user;
    }
  }
}

async function findByToken(token) {
  // TODO: improve this query
  const userObj = await User.findOne({
    where: { active: true },
    include: [
      {
        model: Session,
        attributes: ['accessToken'],
        where: { accessToken: token }
      }
    ]
  });

  if (userObj) {
    const user = userObj.get();
    delete user.sessions;

    return user;
  }
}

module.exports = {
  create,
  listAll,
  findByCredentials,
  findByToken
};
