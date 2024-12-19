const Error = require("../../messages/errors/Error");
const Mess_Success = require("../../messages/success/MessageSuccess");
const ClassService = require("../../services/class/ClassService");

class ClassController {
  async get(req, res){
    try {
      const res_data = await ClassService.getAllClass();
      res.json({
        status: Mess_Success.GET_CLASS.status,
        message: Mess_Success.GET_CLASS.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      })
    }
  }

  async getById(req, res){
    try {
      const res_data = await ClassService.getClassById(req.params.id);
      res.json({
        status: Mess_Success.GET_CLASS.status,
        message: Mess_Success.GET_CLASS.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      })
    }
  }

  async create(req, res){
    try {
      const res_data = await ClassService.addClass(req.body);
      res.json({
        status: Mess_Success.ADD_CLASS.status,
        message: Mess_Success.ADD_CLASS.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      })
    }
  }

  async createMany(req, res){
    try {
      const res_data = await ClassService.addManyClass(req.body);
      res.json({
        status: Mess_Success.ADD_CLASS.status,
        message: Mess_Success.ADD_CLASS.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      })
    }
  }

  async update(req, res){
    try {
      const res_data = await ClassService.updateClassById(req.params._id, req.body);
      res.json({
        status: Mess_Success.ADD_CLASS.status,
        message: Mess_Success.ADD_CLASS.message,
        data: res_data
      })
    } catch (error) {
      res.json({
        status: error.status,
        message: error.message,
      })
    }
  }
}

module.exports = new ClassController();
