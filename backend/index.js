const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes');

const port = process.env.PORT || 3000;
const app = express();

app.use('/api', bodyParser.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`API listening on port ${port}...`));
