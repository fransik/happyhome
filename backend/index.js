const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes');
const { database } = require('./storage');

const port = process.env.PORT || 3000;
const app = express();

app.use('/api', bodyParser.json());
app.use('/api', apiRoutes);

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
