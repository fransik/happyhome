const bcrypt = require('bcryptjs');

async function encryptPassword(user) {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(user.password, salt);
  }
}

module.exports = (database, Sequelize) => {
  const userSchema = {
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
  };
  const userOptions = {
    hooks: {
      beforeSave: encryptPassword
    }
  };
  const User = database.define('user', userSchema, userOptions);

  return User;
};
