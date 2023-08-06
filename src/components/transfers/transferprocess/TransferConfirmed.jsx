import React from "react";
import { useNavigate } from "react-router-dom";

function TransferConfirmed() {
  const navigate = useNavigate();
  return (
    <div className="dark:bg-gradient-to-t from-dark-primary to-light-quaternary min-h-screen">
      <div className="container mx-auto py-8 ">
        <div className="p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Transfer Confirmed</h1>
          <p className=" mb-6">
            Your transfer has been confirmed. You will receive an email with the
            details of your transfer.
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-light-primary hover:bg-light-tertiary text-light-tertiary font-bold py-2 px-4 rounded-full"
          onClick={() => navigate("/")}
        >
          <p className="drop-shadow-2xl">Home</p>
        </button>
      </div>
    </div>
  );
}

export default TransferConfirmed;
