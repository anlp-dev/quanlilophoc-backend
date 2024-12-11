const express = require('express');
require('dotenv').config()
const app = express();
const configViewEngine = require('../src/configs/viewEngine');
const router = require('../src/routes/main/MainRoutes');
const { connect } = require('../src/database/db');
const {logRequest} = require('../src/middleware/rateLimiter')
const cors = require('cors');
// const port = process.env.PORT || 8888;
// const hostname = process.env.HOST_NAME || 'localhost';
const security = require('../src/configs/security');

require('../src/configs/auth');
app.use(logRequest)
app.use(cors());
connect();
configViewEngine(app);
security(app);
app.use(router)
// app.listen(port, hostname, () => {
//   console.log(`App listening at http://${hostname}:${port}`)
// })

const ServerlessHttp = require('serverless-http');
const handler = ServerlessHttp(app);

module.exports.handler = async (event, context) => {
  const res = await handler(event, context);
  return res;
};
