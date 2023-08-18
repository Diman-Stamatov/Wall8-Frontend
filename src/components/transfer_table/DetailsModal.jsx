import React from "react";

const DetailsModal = ({ sentText,receivedText , sentAmount, receivedAmount, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="dark:bg-gradient-to-b dark:from-dark-primary dark:to-light-quaternary w-96 rounded-lg shadow-lg p-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
        >
          Close
        </button>
        <div className="text-center">
          <h2 className="text-xl dark:text-light-primary font-semibold mb-2">{sentText}</h2>
          <p className="text-2xl  text-dark-quaternary font-bold mb-4">{sentAmount}</p>
          <p className="mb-2 dark:text-light-primary">{receivedText}</p>
          <p className="text-2xl text-light-secondary font-bold">{receivedAmount}</p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-semibold px-4 py-2 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;
