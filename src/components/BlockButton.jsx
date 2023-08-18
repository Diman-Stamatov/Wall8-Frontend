import React from "react";
import BlockModal from "./modals/BlockModal";
import { useState } from "react";

function BlockButton({profileUser, onPostComplete}) {
  const [showBlockModal, setShowBlockModal] = useState(false);

  return (
    <div>
      <button
        className="button rounded-full  bg-light-tertiary dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 "
        onClick={() => setShowBlockModal(true)}
      >
        <span className="font-roboto text-sm">Block</span>
      </button>
      {showBlockModal && (
        <BlockModal
        onPostComplete = {onPostComplete}
          showModal={showBlockModal}
          setShowModal={setShowBlockModal}
          profileUser = {profileUser}          
        />
      )}
    </div>
  );
}

export default BlockButton;
