import React from "react";
import walletLogo from "../../assets/wallet-section.png";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { useUserLocale } from "../../context/LocaleContext";
function WalletSection({ wallet }) {
  const { userLocale } = useUserLocale();
  const { balance, currency } = wallet;

  const formattedBalance = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: currency,
  }).format(balance);
  return (
    <div className="  dark:bg-gradient-to-r dark:from-dark-primary dark:to-light-quaternary dark:text-light-primary dark:border-light-secondary flex flex-row items-end py-10 rounded-xl shadow-md ">
      <div className="ml-4 flex flex-col items-center">
        <img
          style={{ width: "260px", height: "260px" }}
          src={walletLogo}
          alt="WalletLogo"
        />
        <div className="mt-8 flex flex-col items-center">
          <p className="text-sm font-semibold dark:text-light-tertiary">
            Total balance
          </p>
          <h1 className="font-semibold lg:text-3xl ml-5 dark:text-light-secondary">
            {formattedBalance}
          </h1>
        </div>
      </div>
      <div className="ml-32 flex flex-col space-x-5">
        <div className="items-center">
          <PlusCircleIcon
            className=" h-12 w-12 text-green-700 hover:-translate-y-2 cursor-pointer"
            style={{ width: "160px", height: "160px" }}
          />
          <p className="font-semibold text-center cursor-default">Add Funds</p>
          <MinusCircleIcon
            className=" h-12 w-12 text-red-700 hover:-translate-y-2 cursor-pointer"
            style={{ width: "160px", height: "160px" }}
          />
          <p className="font-semibold text-center cursor-default">
            Withdraw Funds
          </p>
        </div>
      </div>
    </div>
  );
}

export default WalletSection;
