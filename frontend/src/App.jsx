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

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/vit" element={<VitDashboard />} />
        <Route path="/breeding" element={<Breeding />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cowprofile" element={<CowProfile />} />
        <Route path="shopPage" element={<ShopPage />} />
        <Route path="alertPage" element={<AlertPage />} />
      </Routes>
      
    </Router>

   
  );
};

export default App;