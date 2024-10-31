const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/StudentController");

router.get('/all', StudentController.getAllStudent);
router.post('/create', StudentController.createStudent);
router.put('/update/:id', StudentController.updateStudent);
router.delete('/delete/:id', StudentController.deleteStudentById);

module.exports = router;
