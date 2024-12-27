const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Class = new Schema({
  ma: {type: String},
  khoi: {type: Number},
  name: { type: String },
  courseId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  teacherId: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
  createAt: { type: Date },
  updateAt: { type: Date },
  deleteAt: { type: Date },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = mongoose.model("Class", Class, "class");
