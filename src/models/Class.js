const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Class = new Schema({
  name: { type: String },
  courseId: { type: String },
  teacherId: { type: String },
  createAt: { type: Date },
  updateAt: { type: Date },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
});

module.exports = mongoose.model("Class", Class, "class");
