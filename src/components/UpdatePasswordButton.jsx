import React from "react";
import UpdatePasswordModal from "./modals/UpdatePasswordModal";
import { useState, useContext } from "react";

function UpdatePasswordButton({onPostComplete}) {
  const [showUpdatePasswordModal, setShowUpdatePasswordModal] = useState(false);

  return (
    <div>
      <button
        className="button rounded-full  bg-light-tertiary dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 "
        onClick={() => setShowUpdatePasswordModal(true)}
      >
        <span className="font-roboto text-sm">Update</span>
      </button>
      {showUpdatePasswordModal && (
        <UpdatePasswordModal
        onPostComplete={onPostComplete}
          showModal={showUpdatePasswordModal}
          setShowModal={setShowUpdatePasswordModal}
        />
      )}
    </div>
  );
}

export default UpdatePasswordButton;
