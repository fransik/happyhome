const path = require('path');

module.exports = {
  db: {
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT || 'sqlite',
    dialectOptions: { charset: 'utf8mb4' },
    storage: path.join(__dirname, 'database', 'db.sqlite'),
    operatorsAliases: false,
    // eslint-disable-next-line no-console
    logging: process.env.NODE_ENV === 'production' ? false : console.log
  }
};
