const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Role',required: true },
  email: {type: String},
  fullname: {type: String},
  studentId: {type: String},
  teacherId: {type: String},
  createdAt: {type: Date, default: Date.now},
}, { collection: 'account' })

module.exports = mongoose.model('Account', Account);
