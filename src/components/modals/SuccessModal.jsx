import React from "react";

const SuccessModal = ({ isOpen, onClose, successData, locale }) => {
  const { oldBalance, newBalance, oldCurr, newCurr, fees } = successData || {};
  const formattedOld = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: oldCurr || "EUR",
  }).format(oldBalance);

  const formattedNew = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: newCurr || "EUR",
  }).format(newBalance);

  const formattedFees = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: oldCurr || "EUR",
  }).format(fees);
  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary p-6 rounded shadow-md">
        <div className="text-lg font-bold mb-2">Success</div>
        <div>
          {formattedOld} to {formattedNew}
        </div>
        <div>Total fees: {formattedFees}</div>
        <button
          onClick={onClose}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          OK
        </button>
      </div>
    </div>
  ) : null;
};

export default SuccessModal;
