module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'rotas',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        startsAt: {
          type: Sequelize.DATEONLY,
          allowNull: false
        },
        endsAt: {
          type: Sequelize.DATEONLY,
          allowNull: false
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
    return queryInterface.dropTable('rotas');
  }
};
