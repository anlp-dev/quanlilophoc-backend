const Teacher = require("../models/Teacher");

class TeacherService {
  // get all teacher
  async getAllTeacher() {
    const res_data = await Teacher.find({});
    return res_data;
  }

  // create teacher
  async createTeacher(data) {
    const res_data = await Teacher.create(data);
    return res_data;
  }

  // update teacher
  async updateTeacher(id, data) {
    const res_data = await Teacher.findByIdAndUpdate(id, data);
    return res_data;
  }

  // remove teacher by id
  async deleteTeacherById(id) {
    const res_data = await Teacher.findByIdAndDelete(id);
    return res_data;
  }
}

module.exports = new TeacherService();
