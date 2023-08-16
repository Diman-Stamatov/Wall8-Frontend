import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import SpecialAmountsComponent from "./SpecialAmountsComponent";
import { useUserLocale } from "../../../context/LocaleContext";

const TransferChooseAmount = ({
  wallet,
  amount,
  setAmount,
  onPrevious,
  onNext,
}) => {
  const { userLocale } = useUserLocale();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = Number(rawValue).toLocaleString();
    setValue(formattedValue);
    console.log("value", value)
    setAmount(value);
  };

  return (
    <div style={{ width: "350px" }}>
      <div style={{ height: "101px" }}>
        <SpecialAmountsComponent amount={amount} />
      </div>
      <h1 className="text-4xl text-center mb-4">Enter Amount</h1>
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg dark:shadow-dark-primary">
        <div className="flex flex-col justify-between">
          <label className="dark:text-light-tertiary text-center text-xs font-semibold mb-4">
            Your balance:
          </label>
          <h1 className="text-center text-2xl font-semibold mb-4">
            {new Intl.NumberFormat(userLocale, {
              currency: wallet.currency,
              style: "currency",
            }).format(wallet.balance - amount)}
          </h1>
        </div>
        <div className="">
          <label
            htmlFor="amount"
            className="block text-sm font-medium dark:text-light-tertiary"
          >
            Amount
          </label>
          <input
            type="text"
            value={value}
            onChange={handleChange}
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
