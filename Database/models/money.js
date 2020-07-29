const mongoose = require('mongoose');

const moneySchema = mongoose.Schema({
  id: String,
  money: Number,
});

module.exports = mongoose.model('Money', moneySchema);