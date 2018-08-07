const users = require('../services/users');

async function listAll(req, res) {
  try {
    const userList = await users.listAll();
    res.json(userList);
  } catch (e) {
    res.status(400).json();
  }
}

module.exports = { listAll };
