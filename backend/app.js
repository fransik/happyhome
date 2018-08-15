const express = require('express');

const apiRoutes = require('./router');
const { errorHandler } = require('./error');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use('/api', apiRoutes);
app.use(errorHandler);

module.exports = app;
