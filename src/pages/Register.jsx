import React, { useState } from "react";
import * as Yup from "yup";
import RegisterForm from "../components/authentication/RegisterForm";
import VerifyEmail from "../components/authentication/VerifyMessage";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (values, { setSubmitting, resetForm }) => {
    console.log("register values:", values);
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/register",
        {
          username: values.username,
          email: values.email,
          phoneNumber: values.phone,
          password: values.password,
        }
      );
      console.log("register response: ", response);
      setEmail(values.email);
      setIsRegistered(true);
      resetForm();
    } catch (error) {
      setSubmitting(false);
      console.log("register error: ", error);
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
        <div className="dark:bg-dark-primary bg-light-quaternary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
          <RegisterForm
            validationSchema={validationSchema}
            handleRegister={handleRegister}
            isLoading={isLoading}
          />
        </div>
      ) : (
        <VerifyEmail email={email} />
      )}
    </>
  );
};

export default Register;
