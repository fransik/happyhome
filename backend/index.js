const express = require('express');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => res.send('Hello World!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`API listening on port ${port}...`));
