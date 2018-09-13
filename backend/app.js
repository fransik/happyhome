const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const app = express();
const envPath = path.join(__dirname, '..', '.env');

dotenv.config({ path: envPath });
app.set('port', process.env.PORT || 3000);
app.use('/api', require('./router'));

if (process.env.NODE_ENV === 'production') {
  const buildDir = path.join(__dirname, '..', 'build');

  app.use(express.static(buildDir));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(buildDir, 'index.html'));
  });
}

module.exports = app;
