import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

const TransferChooseAmount = ({
  balance,
  amount,
  setAmount,
  onPrevious,
  onNext,
}) => {
  const handleValueChange = (value, name, values) => {
    if (values.float > balance) {
      setAmount(balance);
      return;
    }
    setAmount(values.float);
  };

  return (
    <div style={{ width: "350px" }}>
      <h1 className="text-4xl text-center mb-4">Enter Amount</h1>
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg dark:shadow-dark-primary">
        <div className="flex flex-col justify-between">
          <label className="dark:text-light-tertiary text-center text-xs font-semibold mb-4">
            Your balance:
          </label>
          <h1 className="text-center text-2xl font-semibold mb-4">
            {new Intl.NumberFormat("de-DE", {
              currency: "EUR",
              style: "currency",
            }).format(balance - amount)}
          </h1>
        </div>
        <div className="">
          <label
            htmlFor="amount"
            className="block text-sm font-medium dark:text-light-tertiary"
          >
            Amount
          </label>
          <CurrencyInput
            name="amount"
            id="amount"
            onValueChange={handleValueChange}
            value={amount}
            intlConfig={{ locale: "de-DE", currency: "EUR" }}
            placeholder="0.00"
            allowDecimals={true}
            decimalScale={2}
            allowNegativeValue={false}
            className="mt-1 block w-full p-4 font-semibold border-gray-300 rounded-md shadow-sm dark:bg-dark-secondary dark:border-dark-primary dark:text-light-primary dark:placeholder-light-tertiary dark:focus:ring-light-primary dark:focus:border-light-primary focus:ring-light-tertiary focus:border-light-tertiary sm:text-sm"
          />
        </div>
      </div>
      <div className="flex-row justify-between flex mt-2">
        <button
          className="text-xl hover:text-light-tertiary focus:outline-none"
          onClick={onPrevious}
        >
          Previous
        </button>
        <button
          disabled={!amount}
          onClick={onNext}
          className="disabled:hover:bg-dark-quaternary border py-1 px-4 text-center hover:bg-dark-primary hover:translate-x-0.5 rounded-full font-semibold"
        >
          <p className="drop-shadow-2xl">Next</p>
        </button>
      </div>
    </div>
  );
};

export default TransferChooseAmount;
