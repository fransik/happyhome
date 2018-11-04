const bcrypt = require('bcryptjs');

async function encryptPassword(user) {
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password(), 12);
  }
}

module.exports = (database, Sequelize) => {
  return database.define(
    'user',
    {
      email: {
        type: Sequelize.STRING(191),
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
          return () => this.getDataValue('password');
        }
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      role: {
        type: Sequelize.ENUM('user', 'admin'),
        allowNull: false,
        defaultValue: 'user'
      }
    },
    {
      hooks: {
        beforeSave: encryptPassword
      }
    }
  );
};
