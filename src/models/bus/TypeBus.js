const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TypeBusSchema = new Schema({
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true },
    seats: { type: Number, required: true },
    features: [{ type: String, default: [] }],
    description: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
});

const defaultBusTypes = [
    { name: 'Xe cabin đơn 34 giường', code: 'BUS34', seats: 34, features: ['WiFi', 'Nước uống', 'Điều hòa'], description: 'Xe giường nằm 34 chỗ tiện nghi' },
    { name: 'Xe cabin đôi 20 giường', code: 'BUS20', seats: 20, features: ['WiFi', 'Điều hòa', 'Màn hình riêng'], description: 'Xe giường nằm 20 chỗ cao cấp' }
];

module.exports = mongoose.model('TypeBus', TypeBusSchema, 'type_bus');
