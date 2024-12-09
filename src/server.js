const express = require('express');
require('dotenv').config()
const app = express();
const configViewEngine = require('./configs/viewEngine');
const router = require('./routes/main/MainRoutes');
const { connect } = require('./database/db');
const {logRequest} = require('./middleware/rateLimiter')
const cors = require('cors');
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME || 'localhost';
const security = require('./configs/security');

require('./configs/auth');
app.use(logRequest)
app.use(cors());
connect();
configViewEngine(app);
security(app);
app.use(router)

app.listen(port, hostname, () => {
  console.log(`App listening at http://${hostname}:${port}`)
})
