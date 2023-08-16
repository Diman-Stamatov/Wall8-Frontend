import React from "react";
import BlockModal from "./modals/BlockModal";
import { useState } from "react";

function BlockButton({profileUser}) {
  const [showBlockModal, setShowBlockModal] = useState(false);

  return (
    <div>
      <button
        className="button rounded-full  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 "
        onClick={() => setShowBlockModal(true)}
      >
        <span className="font-roboto text-sm">Block</span>
      </button>
      {showBlockModal && (
        <BlockModal
          showModal={showBlockModal}
          setShowModal={setShowBlockModal}
          profileUser = {profileUser}          
        />
      )}
    </div>
  );
}

export default BlockButton;
