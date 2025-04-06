// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-16 bg-white px-6 flex items-center justify-around shadow-md z-50">
        <Link to="/home" className="text-black font-medium text-base">Dashboard</Link>
        <Link to="/profile" className="text-gray-500 font-medium text-base">Profile</Link>
        <Link to="/alertPage" className="text-gray-500 font-medium text-base">Alert</Link>
        <Link to="/vets" className="text-gray-500 font-medium text-base">Vet</Link>
      </nav>

      {/* Spacer to push page content below navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
