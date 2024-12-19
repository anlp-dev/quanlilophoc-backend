const Error = require("../../messages/errors/Error");
const Mess_Success = require("../../messages/success/MessageSuccess");
const TeacherService = require("../../services/class/TeacherService");

class TeacherController {
  // [GET] /teacher/all
  async getAllTeacher(req, res){
    try {
      const res_data = await TeacherService.getAllTeacher();
      if(!res_data){
        return res.status(Error.NOT_FOUND_TEACHER.status).json({
          status: Error.NOT_FOUND_TEACHER.status,
          message: Error.NOT_FOUND_TEACHER.message
        })
      }
      res.status(Mess_Success.GET_DATA.status).json({
        status: Mess_Success.GET_DATA.status,
        message: Mess_Success.GET_DATA.message,
        data: res_data
      })
    } catch (error) {
      res.status(Error.ERROR_SYSTEM.status).json(Error.ERROR_SYSTEM.message);
    }
  }

  // [POST] /teacher/create
  async createTeacher(req, res){
    try {
      const res_data = await TeacherService.createTeacher(req.body);
      res.status(Mess_Success.CREATE_SUCCESS.status).json({
        status: Mess_Success.CREATE_SUCCESS.status,
        message: Mess_Success.CREATE_SUCCESS.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: Error.CREATE_TEACHER_FAIL.status,
        message: Error.CREATE_TEACHER_FAIL.message
      })
    }
  }

  // [PUT] /teacher/update/:id
  async updateTeacher(req, res){
    try {
      const res_data = await TeacherService.updateTeacher(req.params.id, req.body);
      if(!res_data){
        return res.status(Error.NOT_FOUND_TEACHER.status).json({
          status: Error.NOT_FOUND_TEACHER.status,
          message: Error.NOT_FOUND_TEACHER.message
        })
      }
      res.status(Mess_Success.UPDATE_SUCCESS.status).json({
        status: Mess_Success.UPDATE_SUCCESS.status,
        message: Mess_Success.UPDATE_SUCCESS.message
      })
    } catch (error) {
      res.status(Error.ERROR_SYSTEM.status).json(Error.ERROR_SYSTEM.message);
    }
  }

  // [DELETE] /teacher/delete/:id
  async deleteTeacherById(req, res){
    try {
      const res_data = await TeacherService.deleteTeacherById(req.params.id);
      if(!res_data){
        return res.status(Error.NOT_FOUND_TEACHER_ID.status).json({
          status: Error.NOT_FOUND_TEACHER_ID.status,
          message: Error.NOT_FOUND_TEACHER_ID.message
        })
      }
      res.status(Mess_Success.DELETE_SUCCESS.status).json({
        status: Mess_Success.DELETE_SUCCESS.status,
        message: Mess_Success.DELETE_SUCCESS.message
      })
    } catch (error) {
      res.status(Error.ERROR_SYSTEM.status).json(Error.ERROR_SYSTEM.message);
    }
  }
}

module.exports = new TeacherController();
