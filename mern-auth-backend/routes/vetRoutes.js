const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Vet = require("../models/Vet"); // Import the Vet schema

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, phone, specialization, experience, clinic, password } = req.body;

    // Check if user already exists
    const existingVet = await Vet.findOne({ email });
    if (existingVet) {
      return res.status(400).json({ error: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new vet
    const vet = new Vet({ name, email, phone, specialization, experience, clinic, password: hashedPassword });
    await vet.save();

    return res.status(201).json({ message: "Vet registered successfully",vet });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find vet by email
    const vet = await Vet.findOne({ email });
    if (!vet || !(await bcrypt.compare(password, vet.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: vet._id }, "jwtsecret", { expiresIn: "1h" });

    res.json({ token, vet });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
