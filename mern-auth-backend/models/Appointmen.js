const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  vet: { type: mongoose.Schema.Types.ObjectId, ref: "Vet", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }, 
  status: { 
    type: String, 
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"], 
    default: "Pending" 
  },
  reason: { type: String, required: true }, // Reason for appointment
  createdAt: { type: Date, default: Date.now }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
