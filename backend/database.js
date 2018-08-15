const Sequelize = require('sequelize');

const config = require('./config');

const database = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  config.db.sequelize
);

const User = require('./users/userModel')(database, Sequelize);
const Session = require('./auth/session.model')(database, Sequelize);

User.hasMany(Session, { onDelete: 'CASCADE' });

module.exports = { database, User, Session };
