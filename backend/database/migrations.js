const Umzug = require('umzug');
const path = require('path');

module.exports = (database, Sequelize) => {
  const migrations = new Umzug({
    storage: 'sequelize',
    storageOptions: { sequelize: database },
    migrations: {
      params: [database.getQueryInterface(), Sequelize],
      path: path.join(__dirname, 'migrations'),
      pattern: /\.js$/
    }
  });

  /* eslint-disable no-console */
  async function run() {
    await migrations.up();
    console.log('[MIGRATIONS] Successfully ran pending migrations');
  }

  return { run };
};
