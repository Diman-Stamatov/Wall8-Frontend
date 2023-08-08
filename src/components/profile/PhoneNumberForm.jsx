import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function PhoneNumberForm({ validationSchema, handleUpdate, handleCancel }) {
  return (
    <Formik
      initialValues={{ newPhoneNumber: "" }}
      validationSchema={validationSchema}
      onSubmit={handleUpdate}
    >
      {({ isSubmitting }) => (
        <div
          className="flex items-center justify-center"
          style={{ marginBottom: 20 }}
        >
          <div className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-55 px-6 py-2 rounded-md ">
            <h1 className="text-3xl font-bold mb-6 text-dark-secondary dark:text-dark-tertiary">
              Please input your new phone number.
            </h1>
            <Form>
              <div className="mb-5">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Phone number
                </label>
                <Field
                  name="newPhoneNumber"
                  type="text"
                  className="dark:bg-dark-tertiary dark:text-white p-1 rounded w-full"
                  maxLength="10"
                />
                <ErrorMessage
                  name="newPhoneNumber"
                  component="div"
                  className="text-red-700 pt-2"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-btn-small dark:bg-dark-secondary  dark:text-white font-bold py-2 px-4 rounded-md"
                  style={{ marginRight: 5 }}
                >
                  Apply
                </button>
                <button
                  onClick={handleCancel}
                  className="auth-btn-small dark:bg-dark-secondary  dark:text-white font-bold py-2 px-4 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export { PhoneNumberForm };
