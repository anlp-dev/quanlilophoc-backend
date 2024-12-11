const express = require("express");
const router = express.Router();
const TeacherController = require("../../controllers/TeacherController");

router.get('/all', TeacherController.getAllTeacher);
router.post('/create', TeacherController.createTeacher);
router.put('/update/:id', TeacherController.updateTeacher);
router.delete('/delete/:id', TeacherController.deleteTeacherById);

module.exports = router;
