import React from "react";
import UpdateEmailModal from "./modals/UpdateEmailModal";
import { useState, useContext } from "react";

function UpdateEmailButton() {
  const [showUpdateEmailModal, setShowUpdateEmailModal] = useState(false);

  return (
    <div>
      <button
        className="button  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 rounded"
        onClick={() => setShowUpdateEmailModal(true)}
      >
        <span className="font-roboto text-l">Update</span>
      </button>
      {showUpdateEmailModal && (
        <UpdateEmailModal
          showModal={showUpdateEmailModal}
          setShowModal={setShowUpdateEmailModal}
        />
      )}
    </div>
  );
}

export default UpdateEmailButton;
