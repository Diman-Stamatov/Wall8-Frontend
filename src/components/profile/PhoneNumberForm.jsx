import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

function PhoneNumberForm({ validationSchema, handleUpdate }) {
  return (
    <Formik
      initialValues={{ newPhoneNumber: "" }}
      validationSchema={validationSchema}
      onSubmit={handleUpdate}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center" style={{marginBottom:20}}>
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
                />
                <ErrorMessage
                  name="newPhoneNumber"
                  component="div"
                  className="text-red-700"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="auth-btn dark:bg-dark-secondary  dark:text-white font-bold py-2 px-4 rounded-md" style={{marginBottom:20}}
                >
                  Apply
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export {PhoneNumberForm};
