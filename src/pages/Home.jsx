import React, { useContext, useState } from "react";
import Hero from "../components/Hero";
import AuthContext from "../context/AuthContext";
import Main from "../components/UserDashboard";

const HomePage = () => {
  const { user } = React.useContext(AuthContext);

  return <div>{user ? <Main /> : <Hero />}</div>;
};

export default HomePage;
