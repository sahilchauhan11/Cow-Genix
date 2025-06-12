const express = require('express');
const passport = require('passport');
const User = require('../models/User');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const twilio = require('twilio');
const Vet = require('../models/Vet');
const { userMiddleware } = require('../middlewares/user.middleware');

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const twilioPhone = process.env.TWILIO_PHONE_NUMBER;
// const client = new twilio(accountSid, authToken);

// Signup Route
// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body; // Added phone
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashedPassword }); // Added phone
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET , { expiresIn: '1h' });

    res.cookie("token", token, { httpOnly: true, secure: true,sameSite: 'None', });

    return res.status(201).json({ message: 'User created', token, user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});


// Login Route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie("token", token, { httpOnly: true, secure: true ,sameSite: 'None',})
    return res.json({ token, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
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
router.get("/allvet", async (req, res) => {
  try {
   const vetArr=await Vet.find().select("-password");
   return res.status(200).json({success:true,vetArr})
   

 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
router.get("/vet/:id",userMiddleware, async (req, res) => {
  try {
    const id=req.params.id;
   const vet=await Vet.findOne({_id:id}).select("-password");
   return res.status(200).json({success:true,vet})
   

 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
router.get("/profile",userMiddleware, async (req, res) => {
  try {
    const {id}=req.user;
   const user=await User.findById(id).select("-password");
   console.log(user);
   
   return res.status(200).json({success:true,user})
   

 
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

// Google Authentication
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/google/callback', passport.authenticate('google', {
//   failureRedirect: '/login',
//   session: false,
// }), (req, res) => {
//   const token = jwt.sign({ id: req.user._id }, 'jwtsecret', { expiresIn: '1h' });
//   res.redirect(`http://localhost:3000?token=${token}`);
// });

// Send OTP
// router.post('/send-otp', async (req, res) => {
//   try {
//     const { phone } = req.body;
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = new Date(Date.now() + 5 * 60000); // 5 minutes validity

//     let user = await User.findOne({ phone });
//     if (!user) {
//       user = new User({ phone, otp, otpExpires });
//     } else {
//       user.otp = otp;
//       user.otpExpires = otpExpires;
//     }
//     await user.save();

//     await client.messages.create({
//       body: `Your OTP code is ${otp}`,
//       from: twilioPhone,
//       to: phone,
//     });

//     res.json({ message: 'OTP sent successfully' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// Verify OTP
// router.post('/verify-otp', async (req, res) => {
//   try {
//     const { phone, otp } = req.body;
//     const user = await User.findOne({ phone, otp, otpExpires: { $gt: new Date() } });
//     if (!user) return res.status(400).json({ error: 'Invalid or expired OTP' });

//     user.otp = null;
//     user.otpExpires = null;
//     await user.save();

//     const token = jwt.sign({ id: user._id }, 'jwtsecret', { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;
