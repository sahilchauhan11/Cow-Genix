// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const VetNavbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md">
      <Link to="/vet/dashboard" className="text-black">Dashboard</Link>
      
      <Link to="/vet/profile" className="text-gray-500">Profile</Link>
      <Link to="/vet/alert" className="text-gray-500">Alert</Link>
    </nav>
  );
};

export default VetNavbar;
