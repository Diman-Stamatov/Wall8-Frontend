import React, { useState } from "react";
import * as Yup from "yup";
import EmailForm from "../components/profile/EmailForm";

import axios from "axios";

const UpdateEmailPage = () => {  
  const [isLoading, setIsLoading] = useState(false);

  const handleConfirm = async (values, { setSubmitting, resetForm }) => {
    console.log("change email values:", values);
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.put(
        "http://localhost:5120/api/virtual-wallet/users/change-email",
        {
          params:
          {
            token:values.token
          },
          email: values.email,
          confirmEmail: values.confirmEmail
        },        
        { 
          withCredentials: true 
        }
      );
      console.log("change email response: ", response);      
      setIsRegistered(true);
      resetForm();
    } catch (error) {
      setSubmitting(false);
      console.log("change email error: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    confirmEmail: Yup.string().required("Required").oneOf(
      [Yup.ref("email"), null],
      "E-mails must match"
    ),
  });

  return (
        <div className="dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
          <EmailForm
            validationSchema={validationSchema}
            handleConfirm={handleConfirm}
            isLoading={isLoading}
          />
        </div>
  );
};

export default UpdateEmailPage;
