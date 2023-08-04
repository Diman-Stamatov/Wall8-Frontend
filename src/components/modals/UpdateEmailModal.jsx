import { useState } from "react";

function UpdateEmailModal({showModal, setShowModal}) {
  
    const handleConfirm = () => {    
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
          <h2 className="text-zinc-500 font-bold text-lg font-roboto mb-4">
            Add Funds
          </h2>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-lg w-full mb-4 text-gray-500 text-xl font-roboto"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handleConfirm}
            className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmailModal;
