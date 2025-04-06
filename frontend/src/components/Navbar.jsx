// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-16 bg-white px-6 flex items-center justify-around shadow-md z-50">
      <NavLink to="/home" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>Dashboard</NavLink>
      
      <NavLink to="/profile" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>Profile</NavLink>
      <NavLink to="/alertPage" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>Alert</NavLink>
      <NavLink to="/vets" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>vet</NavLink>
      </nav>

      {/* Spacer to push page content below navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navbar;
