import React, { useState } from 'react';
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/auth/signup', { name, email, password },,{withCredentials:true});
      console.log('Signup successful:', res.data);
      navigate("/home");
    } catch (error) {
      console.error('Signup error:', error.response?.data || error.message);
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
          <div className="text-center text-2xl font-semibold mb-4">Create an Account</div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input 
              type="text" 
              placeholder="Name" 
              required 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input 
              type="password" 
              placeholder="Password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button 
              type="submit" 
              className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-400">or</p>
            <button 
              className="w-full mt-2 flex items-center justify-center gap-2 p-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
              onClick={() => window.location.href = 'http://localhost:5000/auth/google'}
            >
              <FcGoogle size={20} /> Sign Up with Google
            </button>
           <div className='flex flex-col gap-2 pt-2'>
           <button onClick={()=>{
              navigate("/login")
            }} className='text-sm text-blue-500'>already have an account? LOGIN</button>
            <button onClick={()=>{
              navigate("/vet/signup")
            }} className='text-sm text-blue-500'>sign up as vet</button>
           </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;
