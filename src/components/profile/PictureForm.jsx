import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

function PictureForm({ validationSchema, handleUpdate, handleCancel }) {
  return (
    <Formik
      initialValues={{ newPhoneNumber: "" }}
      validationSchema={validationSchema}
      onSubmit={handleUpdate}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center" style={{marginBottom:20}}>
          <div className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary px-6 py-2 rounded-md ">
            <h1 className="text-2xl font-bold mb-6 text-dark-secondary dark:text-dark-tertiary">
              Please enter the URL of your avatar
            </h1>
            <Form>
              <div className="mb-5">
                <label className="block text-sm font-medium dark:text-dark-tertiary">
                  Avatar URL
                </label>
                <Field
                  name="newPictureUrl"
                  type="text"
                  className="dark:bg-dark-tertiary dark:text-white p-1 rounded w-full"
                />
                <ErrorMessage
                  name="newPictureUrl"
                  component="div"
                  className="text-red-700 text-xs mt-1"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="left-0 auth-btn-small hover:bg-light-secondary dark:hover:bg-light-secondary dark:bg-dark-secondary  dark:text-white font-bold py-2 px-4 rounded-full" style={{marginRight:5}}
                >
                  Apply
                </button>
                <button
                onClick={handleCancel}
                className="right-0 auth-btn-small hover:bg-dark-quaternary dark:hover:bg-dark-quaternary dark:bg-dark-secondary  dark:text-white font-bold py-2 px-4 rounded-full text-xs mt-1"
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

export {PictureForm};
