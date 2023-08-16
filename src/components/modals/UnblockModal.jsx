import { useState } from "react";
import axios from "axios";

function UnblockModal({ showModal, setShowModal, profileUser }) {
  const [confirmed, setConfirmed] = useState(false);  

  const handleConfirm = () => {
    setConfirmed(true);
    try {
      const response = axios.put(
        `http://localhost:5120/api/virtual-wallet/users/unblock/${profileUser.id}`,
        {},
        { withCredentials: true }
      );      
      console.log("unblock response: ", response);
    } catch (error) {
      console.log("unblock error: ", error);
    }
    setShowModal(false);
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
         Are you sure you want to unblock {profileUser.username}?            
          <tr className="flex justify-center ">
            <td>
              
                <button
                  onClick={handleConfirm}
                  className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
                >
                  Confirm
                </button>
              
            </td>

            <td>
              <button
                onClick={handleCancel}
                className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
              >
                Cancel
              </button>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default UnblockModal;
