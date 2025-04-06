// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Breeding from "./pages/Breeding";
import History from "./pages/History";
import Profile from "./pages/Profile";
import CowProfile from "./pages/CowProfile";
import ShopPage from "./pages/ShopPage";
import AlertPage from "./pages/AlertPage";
import VitDashboard from "./pages/VitDashboard";
import { LogIn } from "lucide-react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OtpLogin from "./pages/OtpLogin";
import VetSignUp from "./pages/VetSignUp";
import VetLogin from "./pages/VetLogin";
import VetProfile from "./pages/VetProfile";
import Vets from "./pages/Vets";
import UserVetProfile from "./pages/UserVetProfile";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/vets" element={<Vets />} />
        <Route path="/vet/:id" element={<UserVetProfile />} />
        <Route path="/vet/signup" element={<VetSignUp />} />
        <Route path="/vet/dashboard" element={<VitDashboard />} />
        <Route path="/vet/profile" element={<VetProfile />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/vet/login" element={<VetLogin />} />
        <Route path="/vit" element={<VitDashboard />} />
        <Route path="/breeding" element={<Breeding />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vet/profile" element={<VitDashboard />} />
        <Route path="/cowprofile" element={<CowProfile />} />
        <Route path="shopPage" element={<ShopPage />} />
        <Route path="alertPage" element={<AlertPage />} />
      </Routes>
      
    </Router>

   
  );
};

export default App;