// src/pages/Profile.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Profile = () => {
  const initialUserData = {
    name: "Aarav Mehta",
    email: "aarav.mehta@example.com",
    phone: "+91 98765 43210",
  };

  const [user, setUser] = useState(initialUserData);
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState(initialUserData);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setUser(updatedUser);
    setEditMode(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/user/logout", {}, { withCredentials: true });

      if (res.data.success) {
        navigate("/");
      } else {
        console.error("Logout unsuccessful:", res.data);
      }
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-96 p-6 shadow-lg bg-gray-800 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold mb-4">User Profile</h2>

        {editMode ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="name"
              value={updatedUser.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={updatedUser.email}
              readOnly
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-400 outline-none"
            />
            <input
              type="text"
              name="phone"
              value={updatedUser.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full p-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition"
            >
              Save Changes
            </button>
          </form>
        ) : (
          <div className="space-y-3">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <button
              onClick={() => setEditMode(true)}
              className="w-full p-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
            >
              Edit Profile
            </button>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="w-full mt-3 p-3 bg-red-600 hover:bg-red-500 text-white font-semibold rounded-lg transition"
        >
          Logout
        </button>
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
