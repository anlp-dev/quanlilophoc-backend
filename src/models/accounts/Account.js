const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role',required: true },
  email: {type: String, required: true},
  fullname: {type: String, required: true},
  studentId: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
  teacherId: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},
  createdAt: {type: Date, default: Date.now},
}, { collection: 'account' })

module.exports = mongoose.model('Account', Account);
