const express = require("express");
const router = express.Router();
const ClassController = require("../../controllers/lophoc/ClassController");
const {checkPermission} = require('../../middleware/authPermission')

router.get("/all", ClassController.get);
router.get("/:id", ClassController.getById);
router.post("/create", checkPermission('CRU_CLASS_TEACHER'),ClassController.create);
router.post("/create/many", ClassController.createMany);
router.put("/update", checkPermission('CRU_CLASS_TEACHER'),ClassController.update);
router.delete("/delete", checkPermission('CRU_CLASS_TEACHER'),ClassController.delete);
// router.put('/update/:id', ClassController.updateStudent);
// router.delete('/delete/:id', ClassController.deleteStudentById);

module.exports = router;
