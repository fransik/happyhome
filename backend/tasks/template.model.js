module.exports = (database, Sequelize) => {
  return database.define('tasktemplate', {
    name: {
      type: Sequelize.STRING(125),
      allowNull: false,
      unique: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });
};
