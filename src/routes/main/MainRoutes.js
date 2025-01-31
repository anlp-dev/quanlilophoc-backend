const express = require("express");
const { getHomePage, getApiPage } = require("../../controllers/account/homeController");
const router = express.Router();
const StudentRouter = require('../class/StudentRoutes');
const TeacherRouter = require('../class/TeacherRoutes');
const AuthRouter = require('../account/AuthRoutes');
const ClassRouter = require('../lophoc/ClassRoutes')
const RoleRouter = require('../account/RoleRoutes')
const AccountRouter = require('../account/AccountRoutes')
const EmailRouter = require('../system/EmailRoutes')
const SystemRouter = require('../admin/SystemRoutes')
const AdminRouter = require('../admin/AdminRoutes')
const PasswordConfigRouter = require('../system/PasswordConfigRoutes')
const {checkPermission} = require('../../middleware/authPermission')

router.use('/email', EmailRouter);
router.use('/account', AccountRouter);
router.use('/role', RoleRouter)
router.use('/class', ClassRouter);
router.use('/teacher', TeacherRouter);
router.use('/student', StudentRouter);
router.use("/auth", AuthRouter);
router.use("/system/config", checkPermission("CRUD_ADMIN"), PasswordConfigRouter);
router.use("/system", checkPermission("CRUD_ADMIN"), SystemRouter)
router.use("/admin", checkPermission('SUPER_ADMIN'), AdminRouter)
router.use("/",  getHomePage);

module.exports = router;
