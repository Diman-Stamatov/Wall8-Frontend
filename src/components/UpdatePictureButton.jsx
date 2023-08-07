import React from "react";
import UpdatePictureModal from "./modals/UpdatePictureModal";
import { useState, useContext } from "react";

function UpdatePictureButton({setUpdated}) {
  
  const [showUpdatePictureModal, setUpdatePictureModal] = useState(false);

  return (
    <div>
      <button
        className="button  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 rounded"
        onClick={() => setUpdatePictureModal(true)}
      >
        <span className="font-roboto text-l">Update</span>
      </button>
      {showUpdatePictureModal&& (
        <UpdatePictureModal
          showModal={showUpdatePictureModal}
          setShowModal={setUpdatePictureModal}          
        />
      )}
    </div>
  );
}

export default UpdatePictureButton;
