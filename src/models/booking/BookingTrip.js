const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookingTripSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    busOperator: { type: mongoose.Schema.Types.ObjectId, ref: 'BusOperators', required: true },
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    price: { type: Number, required: true },
    seats: [{ type: String, required: true }],
    pickupLocation: { type: String, required: true },
    dropoffLocation: { type: String, required: true },
    departureTime: { type: Date, required: true },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
    },
    paymentMethod: {
        type: String,
        enum: ['cash', 'VNPay', 'MoMo'],
        required: true
    },
    transactionId: { type: String, default: null },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
});

module.exports = mongoose.model('BookingTrip', BookingTripSchema, 'booking_trip');
