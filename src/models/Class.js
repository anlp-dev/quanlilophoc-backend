const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Class = new Schema({
  name: {type: String}, 
  courseId: {type: String},
  teacherId: {type: String},
})

module.exports = mongoose.model('Class', Class)
