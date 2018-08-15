module.exports = (database, Sequelize) => {
  return database.define('session', {
    accessToken: {
      type: Sequelize.STRING(64),
      allowNull: false,
      unique: true
    }
  });
};
