import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [user, setUser] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_URL}/auth/user/profile`,
        updatedUser,
        { withCredentials: true }
      );
      if (response.data.success) {
        setUser(response.data.user);
        setEditMode(false);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_URL}/auth/user/profile`, { withCredentials: true });
        if (response.data.success) {
          setUser(response.data.user);
          setUpdatedUser(response.data.user);
        }
      } catch (error) {
        console.error("Fetch profile failed:", error);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL}/auth/user/logout`, {}, { withCredentials: true });
      if (res.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-xl font-semibold text-indigo-600">
                  {user.name?.charAt(0) || "U"}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-indigo-600">Your Profile</h2>
            </div>

            {editMode ? (
              <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={updatedUser.name || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={updatedUser.email || ""}
                    readOnly
                    className="w-full px-4 py-2 rounded-md border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={updatedUser.phone || ""}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium"
                >
                  Save Changes
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-24 font-medium text-gray-700">Name:</span>
                  <span className="text-gray-600">{user.name || "Not set"}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 font-medium text-gray-700">Email:</span>
                  <span className="text-gray-600">{user.email || "Not set"}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-24 font-medium text-gray-700">Phone:</span>
                  <span className="text-gray-600">{user.phone || "Not set"}</span>
                </div>
                <button
                  onClick={() => setEditMode(true)}
                  className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors duration-200 font-medium"
                >
                  Edit Profile
                </button>
              </div>
            )}
            <button
              onClick={handleLogout}
              className="w-full mt-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;