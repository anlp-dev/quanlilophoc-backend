const express = require('express');
require('dotenv').config()
const app = express();
const configViewEngine = require('./configs/viewEngine');
const router = require('./routes/MainRoutes');
const { connect } = require('./database/db');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';

connect();
configViewEngine(app);

app.use(router)

app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`)
})
