const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  role: {type: String},
  email: {type: String},
  fullname: {type: String},
  studentId: {type: String},
}, { collection: 'account' })

module.exports = mongoose.model('Account', Account);
