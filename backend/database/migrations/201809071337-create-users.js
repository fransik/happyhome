module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
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
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
