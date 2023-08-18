import React from "react";
import TransferConfirmed from "../components/transfers/transferprocess/TransferConfirmed";

const ConfirmTransferScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-16 py-7 dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary shadow-light-quaternary shadow-2xl rounded-lg">
        <TransferConfirmed />
      </div>
    </div>
  );
};
export default ConfirmTransferScreen;
