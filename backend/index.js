const express = require('express');
const { initializeDB } = require('./db.js');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const db = initializeDB();

app.listen(port, () => {
  console.log(`Listening to https://localhost:${port}`);
});
