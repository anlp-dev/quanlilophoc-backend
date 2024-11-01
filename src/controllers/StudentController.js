const Error = require("../messages/errors/Error");
const Mess_Success = require("../messages/success/MessageSuccess");
const StudentService = require("../services/StudentService");

class StudentController {

  // [DELETE] /student/delete/:id
   async deleteStudentById(req, res){
    try {
      const res_data = await StudentService.deleteStudentById(req.params.id);
      if(!res_data){
        return res.status(Error.NOT_FOUND_STUDENT_ID.status).json({
          status: Error.NOT_FOUND_STUDENT_ID.status,
          message: Error.NOT_FOUND_STUDENT_ID.message,
        });
      }
      res.status(Mess_Success.DELETE_SUCCESS.status).json({
        status: Mess_Success.DELETE_SUCCESS.status,
        message: Mess_Success.DELETE_SUCCESS.message,
      })
    } catch (error) {
      res.status(Error.ERROR_SYSTEM.status).json({
        status: Error.ERROR_SYSTEM.status,
        message: Error.ERROR_SYSTEM.message
      });
    }
  }

  // [PUT] /student/update/:id
  async updateStudent(req, res) {
    try {
      const res_data = await StudentService.updateStudent(req.params.id, req.body);
      if (!res_data) {
        res
          .status(Error.NOT_FOUND_STUDENT.status)
          .json({
            status: Error.NOT_FOUND_STUDENT.status,
            message: Error.NOT_FOUND_STUDENT.message,
          });
      }
      res.status(Mess_Success.UPDATE_SUCCESS.status).json({
        status: Mess_Success.UPDATE_SUCCESS.status,
        message: Mess_Success.UPDATE_SUCCESS.message,
      });
    } catch (error) {
      res.status(Error.ERROR_SYSTEM.status).json(Error.ERROR_SYSTEM.message);
    }
  }

  // [POST] /student/create
  async createStudent(req, res) {
    try {
      const res_data = await StudentService.createStudent(req.body);
      res.status(Mess_Success.CREATE_SUCCESS.status).json({
        status: Mess_Success.CREATE_SUCCESS.status,
        message: Mess_Success.CREATE_SUCCESS.message,
        data: res_data,
      });
    } catch (error) {
      res.status(Error.CREATE_STUDENT_FAIL.status).json({
        status: Error.CREATE_STUDENT_FAIL.status,
        message: Error.CREATE_STUDENT_FAIL.message,
      });
    }
  }

  // [GET] /student/all
  async getAllStudent(req, res) {
    try {
      const res_data = await StudentService.getAllStudent();
      res.status(Mess_Success.GET_DATA.status).json({
        status: Mess_Success.GET_DATA.status,
        message: Mess_Success.GET_DATA.message,
        data: res_data,
      });
    } catch (err) {
      console.log(err);
      res.status(Error.NOT_FOUND_STUDENT.status).json({
        status: Error.NOT_FOUND_STUDENT.status,
        message: Error.NOT_FOUND_STUDENT.message,
      });
    }
  }
}

module.exports = new StudentController();
