import React, { useContext, useState } from "react";
import Hero from "../components/Hero";
import { UserDashboard } from "../components/UserDashboard";
import { useAuth } from "../context/AuthContext.jsx";

const HomePage = () => {
  const { user } = useAuth();
  return <div className="">{user ? <UserDashboard /> : <Hero />}</div>;
};

export default HomePage;
