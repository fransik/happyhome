module.exports = (database, Sequelize) => {
  return database.define('task', {
    completedAt: {
      type: Sequelize.DATE
    }
  });
};
