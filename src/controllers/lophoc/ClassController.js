// const Error = require("../../messages/errors/Error");
const Mess_Success = require("../../messages/success/MessageSuccess");
const ClassService = require("../../services/lophoc/ClassService");
const {resExport} = require("../../enums/resExport");

class ClassController {
  async get(req, res){
    try {
      const data = await ClassService.getAllClass();
      resExport(Mess_Success.GET_CLASS.status, Mess_Success.GET_CLASS.message, data, res)
    } catch (error) {
      resExport(error.status, error.message, null, res)
    }
  }

  async getById(req, res){
    try {
      const data = await ClassService.getClassByTeacherId(req.params.id);
      resExport(Mess_Success.GET_CLASS.status, Mess_Success.GET_CLASS.message, data, res)
    } catch (error) {
      resExport(error.status, error.message, null, res)
    }
  }

  async create(req, res){
    try {
      const data = await ClassService.addClass(req.body);
      resExport(Mess_Success.ADD_CLASS.status, Mess_Success.ADD_CLASS.message, data, res)
    } catch (error) {
      resExport(500, error.message, null, res)
    }
  }

  async createMany(req, res){
    try {
      const data = await ClassService.addManyClass(req.body);
      resExport(Mess_Success.ADD_CLASS.status, Mess_Success.ADD_CLASS.message, data, res)
    } catch (error) {
      resExport(error.message, error.message, null, res)
    }
  }

  async update(req, res){
    try {
      const data = await ClassService.updateClassById(req.body);
      resExport(Mess_Success.UPDATE_CLASS.status, Mess_Success.UPDATE_CLASS.message, data, res)
    } catch (error) {
      resExport(error.message, error.message, null, res)
    }
  }

  async delete(req, res){
    try{
      const data = await ClassService.removeClassById(req.body._id)
      resExport(Mess_Success.DELETE_CLASS.status, Mess_Success.DELETE_CLASS.message, data, res)
    }catch (error) {
      resExport(error.message, error.message, null, res)
    }
  }
}

module.exports = new ClassController();
