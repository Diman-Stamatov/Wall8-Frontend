import React, { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import RegisterForm from "../components/authentication/RegisterForm";
import VerifyEmail from "../components/authentication/VerifyMessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);

      console.log("Registered", values);
      resetForm();
      setIsRegistered(true);
      setEmail(values.email);
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(2).max(20).required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    password: Yup.string().min(8).max(20).required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <>
      {!isRegistered ? (
        <RegisterForm
          validationSchema={validationSchema}
          handleRegister={handleRegister}
        />
      ) : (
        <VerifyEmail email={email} />
      )}
    </>
  );
};

export default Register;
