const mongoose = require("mongoose");

const vetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  specialization: { type: String, required: true }, // e.g., Small Animals, Large Animals
  experience: { type: Number, required: true }, // Years of experience
  clinic: { type: String, required: true }, // Clinic name or location
  password: { type: String, required: true } // Hashed password
});

const Vet = mongoose.model("Vet", vetSchema);
module.exports = Vet;
