const mongoose = require('mongoose');

//create a basic account Schema and assign it to a model (Account)
const accountSchema = mongoose.Schema({
  name: String,
  balance: Number
});
module.exports = mongoose.model('Account',accountSchema);
