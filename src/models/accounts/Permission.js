const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Permission = new Schema({
  name: { type: String, required: true, unique: true}
})

module.exports = mongoose.model('Permission', Permission, 'permissions');
