import React, { useContext, useState } from "react";
import * as Yup from "yup";
import EmailForm from "../components/profile/EmailForm";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import axios from "axios";

const UpdateEmailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user, logoutUser } = useAuth();  

  
  const handleConfirm = async (values, { setSubmitting, resetForm }) => {
    console.log("change email values:", values);
    
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.put(
        "http://localhost:5120/api/virtual-wallet/users/change-email",
        {
          email: values.email,
          confirmEmail: values.confirmEmail,
        },
        {
          params: {
            token: values.token,
          },
          withCredentials: true,
        }
        
      );
      console.log("change email response: ", response);
      logoutUser(); 
    } catch (error) {
      setSubmitting(false);
      console.log("change email error: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    confirmEmail: Yup.string()
      .required("Required")
      .oneOf([Yup.ref("email"), null], "E-mails must match"),
  });

  const [searchParams, setSearchParams] = useSearchParams()
  const token = searchParams.get("token")  
  
  return (
    <div className="dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
      <EmailForm
        validationSchema={validationSchema}
        handleConfirm={handleConfirm}
        isLoading={isLoading}
        token = {token}        
      />
    </div>
  );
};

export default UpdateEmailPage;
