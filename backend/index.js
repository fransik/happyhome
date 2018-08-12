const express = require('express');

const apiRoutes = require('./router');
const { database } = require('./database');
const { errorHandler } = require('./error');

const port = process.env.PORT || 3000;
const app = express();

app.use('/api', apiRoutes);
app.use(errorHandler);

/* eslint-disable no-console */
app.listen(port, async () => {
  try {
    await database.sync();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
  console.log(`API listening on port ${port}...`);
});
/* eslint-enable no-console */
