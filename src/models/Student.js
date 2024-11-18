const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Student = new Schema({
  accountID: { type: String },
  firstName: {type: String},
  lastName: {type: String},
  dateOfBirth: {type: Date},
  gender: {type: String},
  address: {type: String},
  phoneNumber: {type: String},
  classId: {type: String}
})

module.exports = mongoose.model('Student', Student)
