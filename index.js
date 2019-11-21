const express = require('express');
const app = express();

const { config } = require('./config/index');
const sitiosApi = require('./routes/sitios.js');

sitiosApi(app);


app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
})