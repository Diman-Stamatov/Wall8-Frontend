import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function LoginForm({ validationSchema, handleLogin }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center h-screen ">
          <div className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-55 px-6 py-2 rounded-md ">
            <h1 className="text-3xl font-bold mb-6 text-dark-secondary dark:text-dark-tertiary">
              Login
            </h1>
            <Form>
              <div className="mb-5">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className="dark:bg-dark-tertiary dark:text-white p-1 rounded w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="mb-6 ">
                <label className=" dark:text-dark-tertiary block text-sm font-medium text-gray-700 ">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="dark:bg-dark-tertiary dark:text-white p-1 rounded w-full dark:text-wite text-black"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-btn dark:bg-dark-secondary  dark:text-white font-bold py-2 px-4 rounded-md"
                >
                  Login
                </button>
              </div>
              <Link to="/">
                <span className="text-sm dark:text-dark-tertiary hover:text-gray-700">
                  Home
                </span>
              </Link>
              <span className="text-sm tdark:text-dark-tertiary hover:text-gray-700 pointer-events-none">
                {" "}
                |{" "}
              </span>
              <Link to="/register">
                <span className="text-sm dark:text-dark-tertiary hover:text-gray-700">
                  Forgot Password?
                </span>
              </Link>
              <span className="text-sm text-gray-500 hover:text-gray-700 pointer-events-none">
                {" "}
                |{" "}
              </span>
              <Link to="/register">
                <span className="text-sm dark:text-dark-tertiary hover:text-gray-700 ">
                  Don't have an account?
                </span>
              </Link>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
