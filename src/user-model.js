const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
  name: String,
  password: String,
});

module.exports = mongoose.model('User', userShema);
