// src/components/Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-white p-4 flex justify-around shadow-md">
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
  );
};

export default Navbar;
