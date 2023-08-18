import React, { useContext, useState } from "react";
import * as Yup from "yup";
import PasswordForm from "../components/profile/PasswordForm";
import { useSearchParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const ChangePasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logoutUser } = useAuth();

  const handleConfirm = async (values, { setSubmitting, resetForm }) => {
    console.log("change password values:", values);
    
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/reset-password",
        {
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        {
          params: {
            token: values.token,
          },
          withCredentials: true,
        }
      );      
      logoutUser();
      console.log("change password response: ", response);      
         
    } catch (error) {
      setSubmitting(false);
      console.log("change password error: ", error);
    }         
      
  };

  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Required"),
    password: Yup.string().min(8).max(20).required("Required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"),
  });

  const [searchParams, setSearchParams] = useSearchParams()
  const token = searchParams.get("token")  
  
  return (
    <div className="dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
      <PasswordForm
        validationSchema={validationSchema}
        handleConfirm={handleConfirm}
        isLoading={isLoading}
        token = {token}        
      />
    </div>
  );
};

export default ChangePasswordPage;
