import React from "react";
import UpdatePictureModal from "./modals/UpdatePictureModal";
import { useState, useContext } from "react";

function UpdatePictureButton({onPostComplete}) {
  const [showUpdatePictureModal, setUpdatePictureModal] = useState(false);
  

  return (
    <div className="mt-2 ">
      <button
        className="  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 rounded-full"
        onClick={() => setUpdatePictureModal(true)}
      >
        <span className="font-roboto text-l">Change</span>
      </button>
      {showUpdatePictureModal && (
        <UpdatePictureModal
        onPostComplete={onPostComplete}
          showModal={showUpdatePictureModal}
          setShowModal={setUpdatePictureModal}
        />
      )}
    </div>
  );
}

export default UpdatePictureButton;
