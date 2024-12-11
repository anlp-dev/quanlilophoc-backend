const express = require("express");
const { getHomePage, getApiPage } = require("../../controllers/homeController");
const router = express.Router();
const StudentRouter = require('../class/StudentRoutes');
const TeacherRouter = require('../class/TeacherRoutes');
const AuthRouter = require('../account/AuthRoutes');
const ClassRouter = require('../class/ClassRoutes')
const RoleRouter = require('../account/RoleRoutes')
const AccountRouter = require('../account/AccountRoutes')
const EmailRouter = require('../account/EmailRoutes')
const SystemRouter = require('../admin/SystemRoutes')


router.use('/email', EmailRouter);
router.use('/account', AccountRouter);
router.use('/role', RoleRouter)
router.use('/class', ClassRouter);
router.use('/teacher', TeacherRouter);
router.use('/student', StudentRouter);
router.use("/auth", AuthRouter);
router.use("/system", SystemRouter)
router.use("/",  getHomePage);

module.exports = router;
