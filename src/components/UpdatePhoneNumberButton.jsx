import React from "react";
import UpdatePhoneNumberModal from "./modals/UpdatePhoneNumberModal";
import { useState, useContext } from "react";

function UpdatePhoneNumberButton() {
  const [showUpdatePhoneNumberModal, setUpdatePhoneNumberModal] =
    useState(false);

  return (
    <div>
      <button
        className="button  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 rounded-full"
        onClick={() => setUpdatePhoneNumberModal(true)}
      >
        <span className="text-sm">Update</span>
      </button>
      {showUpdatePhoneNumberModal && (
        <UpdatePhoneNumberModal
          showModal={showUpdatePhoneNumberModal}
          setShowModal={setUpdatePhoneNumberModal}
        />
      )}
    </div>
  );
}

export default UpdatePhoneNumberButton;
