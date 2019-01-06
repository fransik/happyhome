const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const helmet = require('helmet');

dotenv.config({
  path: path.join(__dirname, '..', '.env')
});

const app = express();
const api = require('./router');
const cron = require('./cron');

app.set('port', process.env.PORT || 3000);
app.use(helmet());
app.use('/api', api);
cron.startJobs();

if (process.env.NODE_ENV === 'production') {
  const buildDir = path.join(__dirname, '..', 'build');

  app.use(express.static(buildDir));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

module.exports = app;
