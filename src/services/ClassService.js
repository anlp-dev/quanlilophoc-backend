const Class = require("../models/Class");

class ClassService{
  async getAllClass(){
    try {
      const res = await Class.find({});
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getClassById(id){
    try {
      const res = await Class.findById(id).populate("students").populate("teacherId").populate("courseId");
      return res;
    } catch (error) {                           
      throw new Error(error);
    }
  }

  async addClass(classReq){
    try {
      const res_data = await Class.create(classReq);
      return res_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async addManyClass(classReq){
    try {
      const res_data = await Class.insertMany(classReq);
      return res_data;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateClassById(id, classReq){
    try {
      const res_data = await Class.findByIdAndUpdate(id, classReq);
      return res_data;
    } catch (error) {
      
    }
  }
}

module.exports = new ClassService();

