const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Teacher = new Schema({
  accountId: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  dateOfBirth: { type: Date },
  gender: { type: String },
  address: { type: String },
  phoneNumber: { type: String },
  specialization: { type: String },
})

module.exports = mongoose.model('Teacher', Teacher);
