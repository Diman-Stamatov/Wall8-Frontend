import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

const Register = () => {
  const handleRegister = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    axios
      .post("http://localhost:5120/api/virtual-wallet/auth/register", values)
      .then((response) => {
        console.log("Success: ", response.data);
        resetForm();
        setSubmitting(false);
      })
      .catch((error) => {
        console.log("Error: ", error);
        setSubmitting(false);
      });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={{
          username: "",
          email: "",
          phoneNumber: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ isSubmitting }) => (
          <div className="flex items-center justify-center h-screen">
            <div className=" shadow-lg w-96">
              <h1 className="text-3xl font-bold mb-6 text-white">Sign up</h1>
              <Form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <Field
                    name="username"
                    type="text"
                    className="p-1 rounded w-full "
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="p-1 rounded w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Field
                    name="phoneNumber"
                    type="tel"
                    className="p-1 rounded w-full"
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className="p-1 rounded w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-700"
                  />
                </div>
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 px-4 text-center bg-blue-600 rounded-md text-white text-sm hover:bg-blue-500 focus:outline-none"
                  >
                    {isSubmitting ? (
                      <div className="flex justify-center items-center">
                        <ThreeDots color="#FFFFFF" height={10} width={10} />
                      </div>
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
                <Link to="/">
                  <text className="text-sm text-gray-500 hover:text-gray-700">
                    Home
                  </text>
                </Link>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Register;
