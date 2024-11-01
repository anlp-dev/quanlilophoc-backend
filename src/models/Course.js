const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Course = new Schema({
  title: {type: String},
  description: {type: String},
})
