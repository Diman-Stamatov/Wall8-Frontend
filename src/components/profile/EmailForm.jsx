import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function EmailForm({ validationSchema, handleConfirm, isLoading }) {
  return (
    <Formik
      initialValues={{
        token: "",
        email: "",
        confirmEmail: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleConfirm}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center h-screen ">
          <div className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-96 px-6 py-2 rounded-md ">
            <h1 className="text-3xl font-bold mb-6 text-dark-tertiary">
              Please imput your new e-mail address:
            </h1>
            <Form>
              <div className="mb-4">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Token
                </label>
                <Field
                  name="token"
                  type="text"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
                />
                <ErrorMessage
                  name="token"
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
                  Confirm E-mail
                </label>
                <Field
                  name="confirmEmail"
                  type="email"
                  className="p-1 rounded w-full dark:bg-dark-tertiary dark:text-white"
                />
                <ErrorMessage
                  name="confirmEmail"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div className="pt-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="auth-btn-small dark:bg-dark-secondary text-white font-bold py-2 px-4 rounded"
                  style={{ marginRight: 5 }}
                >
                  {isSubmitting ? (
                    <div className="flex justify-center items-center">
                      <ThreeDots color="#FFFFFF" height={10} width={10} />
                    </div>
                  ) : (
                    "Confirm"
                  )}
                </button>
                <Link to="/">
                  <button className="auth-btn-small dark:bg-dark-secondary text-white font-bold py-2 px-4 rounded">
                    Cancel
                  </button>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default EmailForm;
