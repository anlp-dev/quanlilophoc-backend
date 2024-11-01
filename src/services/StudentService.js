const Student = require("../models/Student");

class StudentService {
  // get all student
  async getAllStudent() {
    const res_data = await Student.find({});
    return res_data;
  }
  //  create student 
  async createStudent(data) {
    const res_data = await Student.create(data);
    return res_data;
  }
  // update student 
  async updateStudent(id, data) {
    const res_data = await Student.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    return res_data;
  }
  // delete student 
  async deleteStudentById(id) {
    const res_data = await Student.findByIdAndDelete(id);
    return res_data;
  }
}

module.exports = new StudentService();
