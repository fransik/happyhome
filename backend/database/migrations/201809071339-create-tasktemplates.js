module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'tasktemplates',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING(191),
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
    return queryInterface.dropTable('tasktemplates');
  }
};
