// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md">
      <Link to="/" className="text-black">Dashboard</Link>
      <Link to="/breeding" className="text-gray-500">Breeding</Link>
      <Link to="/history" className="text-gray-500">History</Link>
      <Link to="/profile" className="text-gray-500">Profile</Link>
      <Link to="/alertPage" className="text-gray-500">Alert</Link>
    </nav>
  );
};

export default Navbar;
