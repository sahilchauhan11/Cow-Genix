const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Vet = require("../models/Vet");
const { vetMiddleware } = require("../middlewares/vet.middleware");
 // Import the Vet schema

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
    const token = jwt.sign({ id: vet._id }, "jwtsecret", { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, secure: true,sameSite: 'None', })
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
    
    res.cookie("token", token, { httpOnly: true, secure: true,sameSite: 'None', })
   return  res.json({ token, vet ,success:true});
  } catch (error) {
     return res.status(400).json({ error: error.message });
  }
});
router.post("/logout", async (req, res) => {
  try {
    const {token } = req.cookies;
    
if(!token){
    return res.status(400).json({success:false,message:"NO LOGIN"})
}
  res.clearCookie("token");
  return res.status(200).json({success:true})
   

 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

router.get("/profile",vetMiddleware, async (req, res) => {
  try {
    const {id}=req.vet;
   const vet=await Vet.findById(id).select("-password");
   console.log(vet);
   
   return res.status(200).json({success:true,vet})
   

 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
module.exports = router;
