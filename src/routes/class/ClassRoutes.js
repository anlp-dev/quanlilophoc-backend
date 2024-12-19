const express = require("express");
const router = express.Router();
const ClassController = require("../../controllers/class/ClassController");
const {checkPermission} = require('../../middleware/authPermission')

router.get("/all", ClassController.get);
router.get("/:id", ClassController.getById);
router.post("/create", checkPermission('update', 'delete'),ClassController.create);
router.post("/create/many", ClassController.createMany);
// router.put('/update/:id', ClassController.updateStudent);
// router.delete('/delete/:id', ClassController.deleteStudentById);

module.exports = router;
