// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const VetNavbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md">
      <NavLink to="/vet/dashboard" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>Dashboard</NavLink>
      
      <NavLink to="/vet/profile" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>Profile</NavLink>
      <NavLink to="/vet/alert" className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }>Alert</NavLink>
    </nav>
  );
};

export default VetNavbar;
