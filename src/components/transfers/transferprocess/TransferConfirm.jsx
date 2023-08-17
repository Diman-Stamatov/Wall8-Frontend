import React from "react";
import { Avatar } from "@mui/material";
import { useUserLocale } from "../../../context/LocaleContext";
import { useAuth } from "../../../context/AuthContext";

function TransferConfirm({
  recipient,
  amount,
  onPrevious,
  onSubmit,
  setStep,
  isLoading,
}) {
  const [fee, setFee] = React.useState(0.0);
  const userLocale = useUserLocale();
  const { user } = useAuth();
  const currency = user.data.wallet.balance.currency;

  const calculateFee = (amount) => {
    return amount * 0.01;
  };

  React.useEffect(() => {
    const calculatedFee = calculateFee(amount);
    setFee(calculatedFee);
  }, [amount]);

  return (
    <div style={{ width: "400px" }}>
      <h1 className="text-4xl text-center mb-4">Confirm Details</h1>
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <div className="grid grid-cols-1 divide-y space-y-1">
          <div className="pb-2 dark:text-light-primary flex-col justify-between items-start space-y-0">
            <header className=" text-3xl">Amount</header>
            <div className="flex justify-between items-center w-full">
              <label className="mt-1 dark:text-dark-tertiary ml-4 text-sm font-medium">
                {new Intl.NumberFormat(userLocale, {
                  currency: currency,
                  style: "currency",
                }).format(amount)}
              </label>
              <span className="mt-1 dark:text-dark-secondary my-auto text-lg">
                <a className="cursor-pointer" onClick={() => setStep(2)}>
                  Change
                </a>
              </span>
            </div>
          </div>
          <div className="py-2 dark:text-light-primary flex-col justify-between items-start space-y-0">
            <header className=" text-3xl">Fees</header>
            <div className="flex justify-between items-center w-full">
              <label className=" dark:text-dark-tertiary ml-4 text-sm font-medium">
                {new Intl.NumberFormat(userLocale, {
                  currency: currency,
                  style: "currency",
                }).format(fee)}
              </label>
              <span className=" dark:text-dark-secondary my-auto text-lg">
                <a href="/info">Info</a>
              </span>
            </div>
            <div className="mt-1  dark:text-dark-secondary text-xs">
              1% of total amount
            </div>
          </div>
          <div className="pt-2 dark:text-light-primary flex-col justify-between items-start space-y-0">
            <header className=" text-3xl">Recipient</header>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center">
                <Avatar />
                <label className="dark:text-dark-tertiary ml-2 font-medium">
                  {recipient}
                </label>
              </div>
              <span className="dark:text-dark-secondary text-lg">
                <a className="cursor-pointer" onClick={() => setStep(1)}>
                  Change
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      {isLoading ? (
        ""
      ) : (
        <div className="flex-row justify-between flex mt-2">
          <button
            className="text-xl hover:text-light-tertiary focus:outline-none"
            onClick={onPrevious}
          >
            Previous
          </button>
          <button
            onClick={onSubmit}
            className="disabled:hover:bg-dark-quaternary border py-1 px-4 text-center hover:bg-dark-primary hover:translate-x-0.5 rounded-full font-semibold"
          >
            <p className="drop-shadow-2xl">Confirm Transfer</p>
          </button>
        </div>
      )}
    </div>
  );
}

export default TransferConfirm;
