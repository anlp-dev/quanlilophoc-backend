const express = require('express');
require('dotenv').config()
const app = express();
const configViewEngine = require('./configs/viewEngine');
const router = require('./routes/MainRoutes');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

configViewEngine(app);

app.use(router)

app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`)
})
