const Sequelize = require('sequelize');

const config = require('../config');

const database = new Sequelize(config.db);
const migrations = require('./migrations')(database, Sequelize);

const User = require('../users/user.model')(database, Sequelize);
const Session = require('../auth/session.model')(database, Sequelize);
const Task = require('../tasks/task.model')(database, Sequelize);
const TaskTemplate = require('../tasks/template.model')(database, Sequelize);
const Rota = require('../rotas/rota.model')(database, Sequelize);

User.hasMany(Session, { onDelete: 'CASCADE' });
User.hasMany(Task);
TaskTemplate.hasMany(Task);
Rota.hasMany(Task);
Task.belongsTo(TaskTemplate, { foreignKey: 'tasktemplateId', as: 'details' });
Task.belongsTo(User);
Task.belongsTo(Rota);

module.exports = {
  database,
  migrations,
  User,
  Session,
  Task,
  TaskTemplate,
  Rota
};
