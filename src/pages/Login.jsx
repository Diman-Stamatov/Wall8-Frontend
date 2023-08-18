import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/authentication/LoginForm";
import { useError } from "../context/ErrorContext";

const Login = () => {
  const { loginUser } = useAuth();
  const { clearError } = useError();

  const handleLogin = async (values, { setSubmitting }) => {
    clearError();
    await loginUser(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    password: Yup.string(),
  });

  return (
    <div className=" bg-light-quaternary  dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
      <LoginForm
        validationSchema={validationSchema}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
