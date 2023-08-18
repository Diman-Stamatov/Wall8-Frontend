import React from "react";
import UpdatePasswordModal from "./modals/UpdatePasswordModal";
import { useState, useContext } from "react";

function ForgotPasswordTextButton({onPostComplete}) {
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  return (
    <>
      <button
        className="text-sm dark:text-dark-tertiary hover:text-gray-700"
        onClick={() => setShowUpdatePasswordModal(true)}
      >
        <span>Forgot Password?</span>
      </button>
      {showUpdatePasswordModal && (
        <UpdatePasswordModal
        onPostComplete={onPostComplete}
          showModal={showUpdatePasswordModal}
          setShowModal={setShowUpdatePasswordModal}
        />
      )}
    </>
  );
}

export default ForgotPasswordTextButton;
