import React from "react";
import UpdateEmailModal from "./modals/UpdateEmailModal";
import { useState, useContext } from "react";

function UpdateEmailButton() {
  const [showUpdateEmailModal, setUpdateEmailModal] = useState(false);

  return (
    <div>
      <button
        className="button  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 rounded"
        onClick={() => setUpdateEmailModal(true)}
      >
        <span className="font-roboto text-l">Update</span>
      </button>
      {showUpdateEmailModal && (
        <UpdateEmailModal
          showModal={showUpdateEmailModal}
          setShowModal={setUpdateEmailModal}
        />
      )}
    </div>
  );
}

export default UpdateEmailButton;
