const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusOperatorsSchema = new Schema({
    name: { type: String, required: true, unique: true }, // Tên nhà xe
    types: { type: mongoose.Schema.Types.ObjectId, ref: 'TypeBus', required: true }, // Loại xe
    code: { type: String, required: true, unique: true }, // Mã nhà xe
    phone: { type: String, required: true }, // Số điện thoại
    image: { type: String, default: "" },
    routes: { type: String, required: true },
    schedules: {type: mongoose.Schema.Types.ObjectId, ref: 'BusSchedule', required: true},
    status: { type: Boolean, default: true },
    rating: { type: Number, default: 0, min: 0, max: 5 },
    totalTrips: { type: Number, default: 0 },
    description: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
});

module.exports = mongoose.model('BusOperators', BusOperatorsSchema, 'bus_operators');
