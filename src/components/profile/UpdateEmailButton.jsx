import React from "react";

import UpdateEmailModal from "./modals/UpdateEmailModal";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function UpdateEmailButton() {
  const { setBalance } = useContext(AuthContext);
  const [showUpdateEmailModal, setUpdateEmailModal] = useState(false);

  return (
    <div className="container max-h-screen mx-auto  p-6 pt-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <button
            onClick={() => setUpdateEmailModal(true)}
            className="p-5 m-2 bg-transparent text-green-500 rounded-lg flex flex-col items-center"
          >            
            <span className="font-roboto text-l">Update</span>
          </button>
          {showUpdateEmailModal && (
            <UpdateEmailModal
              showModal={showUpdateEmailModal}
              setShowModal={setUpdateEmailModal}              
            />
          )}
          <button className="p-5 m-2 bg-transparent text-red-500 rounded-lg flex flex-col items-center">
            <BsPatchMinus className="text-6xl" />
            <span className="font-roboto text-l">Withdraw Funds</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmailButton;
