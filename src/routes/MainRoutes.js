const express = require("express");
const { getHomePage, getApiPage } = require("../controllers/homeController");
const router = express.Router();

router.get("/",  getHomePage);

router.get("/api", getApiPage);

module.exports = router;
