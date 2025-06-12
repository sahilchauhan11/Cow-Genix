const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  googleId: String,
  phone: String,
  otp: String,
  otpExpires: Date,
});

module.exports = mongoose.model('User', UserSchema);
