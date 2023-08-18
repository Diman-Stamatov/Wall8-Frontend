import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

function VerifyForm({ validationSchema, handleConfirm, isLoading, token }) {
  
  return (
    <Formik
      initialValues={{
        token: token,        
      }}
      validationSchema={validationSchema}
      onSubmit={handleConfirm}
    >
      {({ isSubmitting }) => (
        <div className="flex items-center justify-center h-screen ">
          <div className="border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-96 px-6 py-2 rounded-md ">
            <h1 className="text-3xl font-bold mb-6 text-dark-tertiary justify-center" style={{textAlign:"center"}}>
              Your e-mail has been verified. You can now enjoy the full functionality of the application!
            </h1>
            <Form>              
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
                    "Continue"
                  )}
                </button>                
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default VerifyForm;
