import React from "react";
import UnblockModal from "./modals/UnblockModal";
import { useState } from "react";

function UnblockButton({profileUser}) {
  const [showUnblockModal, setShowUnblockModal] = useState(false);

  return (
    <div>
      <button
        className="button rounded-full  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 "
        onClick={() => setShowUnblockModal(true)}
      >
        <span className="font-roboto text-sm">Unblock</span>
      </button>
      {showUnblockModal && (
        <UnblockModal
          showModal={showUnblockModal}
          setShowModal={setShowUnblockModal}
          profileUser = {profileUser}
        />
      )}
    </div>
  );
}

export default UnblockButton;
