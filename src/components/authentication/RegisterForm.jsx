import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function RegisterForm({ isLoading, validationSchema, handleRegister }) {
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
        <div className="flex items-center justify-center h-screen ">
          <div className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-96 px-6 py-2 rounded-md ">
            <h1 className="text-3xl font-bold mb-6 text-dark-tertiary">
              Sign up
            </h1>
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Phone
                </label>
                <Field
                  name="phone"
                  type="tel"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Confirm Password
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
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
                  disabled={isSubmitting || isLoading}
                  className="auth-btn dark:bg-dark-secondary text-white font-bold py-2 px-4 rounded"
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
              <text className="text-sm dark:text-dark-tertiary hover:text-gray-700 pointer-events-none">
                {" "}
                |{" "}
              </text>
              <Link to="/login">
                <text className="text-sm dark:text-dark-tertiary hover:text-gray-700">
                  Have an account?
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
