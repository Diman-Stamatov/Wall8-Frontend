import React, { useContext, useState } from "react";
import * as Yup from "yup";
import VerifyForm from "../components/profile/VerifyForm";
import { useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import axios from "axios";

const VerifyEmailPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { logoutUser } = useAuth();

  const handleConfirm = async (values, { setSubmitting, resetForm }) => {
    console.log("verify values:", values);

    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:5120/api/virtual-wallet/auth/verify-email",
        {
          params: {
            token: values.token,
          },
          withCredentials: true,
        }
      );
      logoutUser();
      console.log("verify response: ", response);
    } catch (error) {
      setSubmitting(false);
      console.log("verify error: ", error);
    }
  };

  const validationSchema = Yup.object().shape({
    token: Yup.string().required("Required"),
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");

  return (
    <div className="dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
      <VerifyForm
        validationSchema={validationSchema}
        handleConfirm={handleConfirm}
        isLoading={isLoading}
        token={token}
      />
    </div>
  );
};

export default VerifyEmailPage;
