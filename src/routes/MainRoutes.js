const express = require("express");
const { getHomePage, getApiPage } = require("../controllers/homeController");
const router = express.Router();
const StudentRouter = require('./StudentRoutes');
const StudentController = require("../controllers/StudentController");

router.use('/student', StudentRouter);
router.use("/api", getApiPage);
router.use("/",  getHomePage);



module.exports = router;
