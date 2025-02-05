const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusStation = new Schema({
    lot: {type: Number, required: true},
    description: { type: String, default: "" }, // Mô tả vai trò (optional)
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
});

module.exports = mongoose.model('BusStation', BusStation, 'bus_station');