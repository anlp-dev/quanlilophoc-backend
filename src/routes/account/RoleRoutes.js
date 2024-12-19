const express = require("express");
const router = express.Router();
const RoleController = require("../../controllers/account/RoleController");

router.get('/', RoleController.getAll);
// router.post('/create', ClassController.create);
// router.post('/create/many', ClassController.createMany);
// router.put('/update/:id', ClassController.updateStudent);
// router.delete('/delete/:id', ClassController.deleteStudentById);

module.exports = router;
