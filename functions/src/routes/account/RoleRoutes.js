const express = require("express");
const router = express.Router();
const RoleController = require("../../controllers/RoleController");

router.get('/', RoleController.get);
// router.get('/:id', ClassController.getById);
// router.post('/create', ClassController.create);
// router.post('/create/many', ClassController.createMany);
// router.put('/update/:id', ClassController.updateStudent);
// router.delete('/delete/:id', ClassController.deleteStudentById);

module.exports = router;
