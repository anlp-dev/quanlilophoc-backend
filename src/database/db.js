const mongoose = require('mongoose');
require('dotenv').config()
async function connect(){
  try {
    await mongoose.connect(process.env.URL_DB);
    console.log('Connect successfuly!!!');
  } catch (error) {
    console.log('connect fail!!!');
  }
}

module.exports = {connect};
