const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PassConfigSystem = new Schema({
    lengthPass: {type: Number, required: true, default: 8},
    specialCharacters: {type: Boolean, required: true, default: false},
    numbersCharacters: {type: Boolean, required: true, default: false},
    upperCaseCharacters: {type: Boolean, required: true, default: false},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null },
    deleteAt: { type: Date, default: null },
});

module.exports = mongoose.model('PassConfigSystem', PassConfigSystem);