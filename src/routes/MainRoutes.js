const express = require("express");
const { getHomePage, getApiPage } = require("../controllers/homeController");
const router = express.Router();
const StudentRouter = require('./StudentRoutes');
const TeacherRouter = require('./TeacherRoutes');
const AuthRouter = require('./AuthRoutes');
const ClassRouter = require('./ClassRoutes')
const RoleRouter = require('./RoleRoutes')
const AccountRouter = require('./AccountRoutes')

router.use('/account', AccountRouter);
router.use('/role', RoleRouter)
router.use('/class', ClassRouter);
router.use('/teacher', TeacherRouter);
router.use('/student', StudentRouter);
router.use("/auth", AuthRouter);
router.use("/",  getHomePage);

module.exports = router;
