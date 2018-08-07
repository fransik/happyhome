module.exports = (database, Sequelize) => {
  const User = database.define('user', {
    email: {
      type: Sequelize.STRING(191),
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    active: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  });

  return User;
};
