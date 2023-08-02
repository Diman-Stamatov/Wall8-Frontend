import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function RegisterForm({ validationSchema, handleRegister }) {
  return (
    <Formik 
      initialValues={{
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleRegister}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center h-screen">
          <div className="border border-gray-700  rounded-md shadow-lg w-96 px-6 py-2 bg-gradient-to-br from-black to-gray-900">
            <h1 className="text-3xl font-bold mb-6 text-white font-roboto">
              Sign up
            </h1>
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
                  name="phone"
                  type="tel"
                  className="p-1 rounded w-full"
                />
                <ErrorMessage
                  name="phone"
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
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="p-1 rounded w-full"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-btn bg-gradient-to-l from-transparent to-gray-500 text-white font-bold py-2 px-4 rounded"
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
  );
}

export default RegisterForm;
