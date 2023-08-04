import React from "react";

function TransferConfirm({ recipient, amount, onPrevious, onSubmit }) {
  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Confirm Transfer</h2>
      <div className="mb-4">
        <p className="text-gray-700">
          You are about to transfer ${amount.toFixed(2)} to:
        </p>
        <p className="mt-1 text-lg font-medium">{recipient}</p>
      </div>
      <div className="flex justify-between">
        <button
          className="px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md"
          onClick={onSubmit}
        >
          Confirm Transfer
        </button>
      </div>
    </div>
  );
}

export default TransferConfirm;
