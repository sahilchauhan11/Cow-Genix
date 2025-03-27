// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md">
      <Link to="/home" className="text-black">Dashboard</Link>
      
      <Link to="/profile" className="text-gray-500">Profile</Link>
      <Link to="/alertPage" className="text-gray-500">Alert</Link>
      <Link to="/vets" className="text-gray-500">vet</Link>
    </nav>
  );
};

export default Navbar;
