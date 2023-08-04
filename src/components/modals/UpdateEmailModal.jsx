import { useState } from "react";
import axios from "axios";

function UpdateEmailModal({ showModal, setShowModal }) {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);   
    try {
      
      
      const response = axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/initiate-email-change"
      );
      console.log("change email response: ", response);
    } catch (error) {
      
      console.log("change email error: ", error);
    }

  };

  const handleCancel = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  return (
    <div className="modal">
      <div className="backdrop" onClick={() => setShowModal(false)}>
        <div
          className="modal-content p-6 bg-transparent outline-none outline-zinc-700 rounded-xl shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          {!confirmed
            ? "Are you sure you want to change your e-mail?"
            : "A confirmation link has been sent to your e-mail. Please check your inbox to proceed."}
          <tr className="flex justify-center ">
            <td>
              {!confirmed ?
              <button
                onClick={handleConfirm}
                className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
              >
                Confirm
              </button> : null
              }
            </td>

            <td>
              <button
                onClick={handleCancel}
                className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
              >
                {!confirmed
            ? "Cancel"
            : "Close"}
              </button>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmailModal;
