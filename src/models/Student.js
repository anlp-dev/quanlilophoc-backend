const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Student = new Schema({
  name: {type: String},
  age: {type: Number},
  class: {type: String},
})

module.exports = mongoose.model('Student', Student)
