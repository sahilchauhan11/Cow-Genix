// src/components/VetNavbar.js
import React from "react";
import { NavLink } from "react-router-dom";

const VetNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full h-16 bg-white px-6 flex items-center justify-around shadow-md z-50">
        <NavLink
          to="/vet/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/vet/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }
        >
          Profile
        </NavLink>

        <NavLink
          to="/vet/alert"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "text-gray-500 hover:text-blue-500"
          }
        >
          Alert
        </NavLink>
      </nav>

      {/* Spacer to push page content below navbar */}
      <div className="h-16" />
    </>
  );
};

export default VetNavbar;
