const users = require('./controller');

async function create(req, res, next) {
  const { body } = req;
  try {
    const user = await users.create(body);
    res.json(user);
  } catch (e) {
    next(e);
  }
}

async function listAll(req, res, next) {
  try {
    const userList = await users.listAll();
    res.json(userList);
  } catch (e) {
    next(e);
  }
}

module.exports = { create, listAll };
