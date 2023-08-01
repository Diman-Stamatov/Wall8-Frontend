import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useAuth();

  const handleLogin = async (values, { setSubmitting }) => {
    console.log("login values:", values);
    await loginUser(values);
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center h-screen">
          <div className=" rounded-md shadow-lg w-96 px-6 py-2 bg-gradient-to-br from-black to-gray-900">
            <h1 className="text-3xl font-bold mb-6 text-white">Login</h1>
            <Form>
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  className="p-1 rounded w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="mb-6">
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
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-btn bg-gradient-to-l from-transparent to-gray-500 text-white font-bold py-2 px-4 rounded"
                >
                  Login
                </button>
              </div>
              <Link to="/">
                <text className="text-sm text-gray-500 hover:text-gray-700">
                  Home
                </text>
              </Link>
              <text className="text-sm text-gray-500 hover:text-gray-700 pointer-events-none">
                {" "}
                |{" "}
              </text>
              <Link to="/register">
                <text className="text-sm text-gray-500 hover:text-gray-700">
                  Forgot Password?
                </text>
              </Link>
              <text className="text-sm text-gray-500 hover:text-gray-700 pointer-events-none">
                {" "}
                |{" "}
              </text>
              <Link to="/register">
                <text className="text-sm text-gray-500 hover:text-gray-700 ">
                  Don't have an account?
                </text>
              </Link>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
