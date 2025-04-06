import React, { useState } from 'react';
import axios from 'axios';
import { motion } from "framer-motion";

const OtpLogin = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [sent, setSent] = useState(false);

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_URL}/auth/send-otp`, { phone });
      setSent(true);
    } catch (error) {
      console.error('OTP send error:', error.response?.data || error.message);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/auth/verify-otp`, { phone, otp });
      console.log('OTP verified:', res.data);
    } catch (error) {
      console.error('OTP verification error:', error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-96 p-6 shadow-lg bg-gray-800 text-white rounded-2xl">
          <div className="text-center text-2xl font-semibold mb-4">Phone OTP Login</div>
          {!sent ? (
            <form onSubmit={sendOtp} className="space-y-4">
              <input 
                type="text" 
                placeholder="Phone Number" 
                required 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button 
                type="submit" 
                className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
              >
                Send OTP
              </button>
            </form>
          ) : (
            <form onSubmit={verifyOtp} className="space-y-4">
              <input 
                type="text" 
                placeholder="Enter OTP" 
                required 
                value={otp} 
                onChange={(e) => setOtp(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button 
                type="submit" 
                className="w-full p-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition"
              >
                Verify OTP
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default OtpLogin;
