const express = require('express');
const path = require('path');

const apiRoutes = require('./router');

const app = express();
const buildDir = path.join(__dirname, '..', 'build');

app.set('port', process.env.PORT || 3000);
app.use('/api', apiRoutes);

app.use(express.static(buildDir));
app.get('/*', (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

module.exports = app;
