module.exports = (database, Sequelize) => {
  return database.define(
    'rota',
    {
      startsAt: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      endsAt: {
        type: Sequelize.DATEONLY,
        allowNull: false
      }
    },
    {
      tableName: 'rotas',
      name: { singular: 'rota', plural: 'rotas' }
    }
  );
};
