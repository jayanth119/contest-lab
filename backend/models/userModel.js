const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
    username: String,
    email: String
  });
  
  const User = mongoose.model('User', userSchema);

  module.exports = User;

