import { useState } from "react";
import axios from "axios";

function BlockModal({ showModal, setShowModal, profileUser, onPostComplete }) {
  const [confirmed, setConfirmed] = useState(false);
  const [postResult, setPostResult] = useState(null);

  const handleConfirm = async () => {
    setConfirmed(true);
    try {
      const response = await axios.put(
        `http://localhost:5120/api/virtual-wallet/users/block/${profileUser.id}`,
        {},
        { withCredentials: true }
      );
      setPostResult(response.data.blockedStatus);
      onPostComplete(response.data.blockedStatus);
    } catch (error) {
      console.log("block error: ", error);
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
          Are you sure you want to block {profileUser.username}?
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

export default BlockModal;
