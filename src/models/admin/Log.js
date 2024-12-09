const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Log = new Schema({
  timestamp: { type: Date, required: true },
  ip: { type: String, required: true },
  location: { type: Object }, // Thông tin vị trí từ geoip
  hostname: { type: String },
  user: { type: String },
  endpoint: { type: String },
  method: { type: String },
});

module.exports = mongoose.model("RequestLog", Log, "log_request");
