module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'sessions',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        accessToken: {
          type: Sequelize.STRING(64),
          allowNull: false,
          unique: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'users',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        }
      },
      {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sessions');
  }
};
