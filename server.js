const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');

app.use(express.static('public'));

const routes = require('./routes/routes');

app.use(routes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})