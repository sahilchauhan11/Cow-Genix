import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import VetNavbar from "../components/VetNavbar";
const VetProfile = () => {
 

  const [vet, setVet] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [updatedVet, setUpdatedVet] = useState(vet);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUpdatedVet({ ...updatedVet, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setVet(updatedVet);
    setEditMode(false);
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/vet/logout", {}, { withCredentials: true });
  
      if (res.data.success) {
        navigate("/vet/login");
      } else {
        console.error("Logout unsuccessful:", res.data);
      }
    } catch (error) {
      console.error("Logout failed:", error.response?.data || error.message);
    }
  };
  useEffect(() => {
  const func=async()=>{
    const response=await axios.get("http://localhost:5000/auth/vet/profile", { withCredentials: true });
    console.log(response);
    if(response.data.success){
      setVet(response.data.vet);
      setUpdatedVet(response.data.vet);
   
  
    }
  } 
  func();
    return () => {
      
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-96 p-6 shadow-lg bg-gray-800 rounded-2xl">
        <h2 className="text-center text-2xl font-semibold mb-4">Vet Profile</h2>

        {editMode ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <input
              type="text"
              name="name"
              value={updatedVet.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              value={updatedVet.email}
              readOnly
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-gray-400 outline-none"
            />
            <input
              type="text"
              name="phone"
              value={updatedVet.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="specialization"
              value={updatedVet.specialization}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="number"
              name="experience"
              value={updatedVet.experience}
              onChange={handleChange}
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="text"
              name="clinic"
              value={updatedVet.clinic}
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
            <p><strong>Name:</strong> {vet.name}</p>
            <p><strong>Email:</strong> {vet.email}</p>
            <p><strong>Phone:</strong> {vet.phone}</p>
            <p><strong>Specialization:</strong> {vet.specialization}</p>
            <p><strong>Experience:</strong> {vet.experience} years</p>
            <p><strong>Clinic:</strong> {vet.clinic}</p>
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
      <VetNavbar/>
    </div>
  );
};

export default VetProfile;