const Sequelize = require('sequelize');

const config = require('./config');

const database = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.sequelize
);

const User = require('./users/userModel')(database, Sequelize);

module.exports = { database, User };
