// src/components/VetNavbar.js
import React from "react";
import { Link } from "react-router-dom";

const VetNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-16 bg-white px-6 flex items-center justify-around shadow-md z-50">
        <Link to="/vet/dashboard" className="text-black font-medium text-base">Dashboard</Link>
        <Link to="/vet/profile" className="text-gray-500 font-medium text-base">Profile</Link>
        <Link to="/vet/alert" className="text-gray-500 font-medium text-base">Alert</Link>
      </nav>

      {/* Spacer to push page content below navbar */}
      <div className="h-16" />
    </>
  );
};

export default VetNavbar;
