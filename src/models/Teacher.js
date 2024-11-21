const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Teacher = new Schema({
  accountId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Account', // Tham chiếu đến collection Account
    default: null 
  },
  firstName: { type: String, default: null },
  lastName: { type: String, default: null },
  dateOfBirth: { type: Date, default: null },
  gender: { type: String, default: null },
  address: { type: String, default: null },
  phoneNumber: { type: String, default: null },
  specialization: { type: String, default: null },
  classId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Class', // Tham chiếu đến collection Class
    default: null 
  }
});

module.exports = mongoose.model('Teacher', Teacher);
