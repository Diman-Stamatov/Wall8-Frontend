import React, { useState } from "react";

const TransferChooseAmount = ({
  balance,
  amount,
  setAmount,
  onPrevious,
  onNext,
}) => {
  const newBalance = balance - amount;

  const handleAmountChange = (e) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(newAmount);
    console.log(e.target.value);
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Transfer Amount</h2>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount
        </label>
        <input
          type="number"
          id="amount"
          className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:outline-none"
          placeholder="Enter amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="mb-4">
        <p className="text-gray-700">
          Remaining Balance: ${newBalance.toFixed(2)}
        </p>
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
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransferChooseAmount;
