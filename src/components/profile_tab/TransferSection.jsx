import React from "react";
import "./TransferSection.css";
import { useUserLocale } from "../../context/LocaleContext";

const TransferSection = ({ transfers }) => {
  transfers.sort((a, b) => {
    return b.timestamp.localeCompare(a.timestamp);
  });
  const slicedTransfers = transfers.slice(0, 4);
  const userLocale = useUserLocale();

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-medium text-2xl mb-4 text-gray-800 dark:text-light-primary">
        Recent Transfers
      </h1>
      <div className="w-full drop-shadow-lg">
        {slicedTransfers.map((transfer, index) => {
          const scale = 1 - index * 0.05;
          const scaleStyle = {
            transform: `scale(${scale})`,
            transition: "transform 0.3s",
          };
          return (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md ${
                transfer.type === "incoming"
                  ? "bg-gradient-to-r from-light-primary to-light-secondary dark:from-dark-primary dark:to-light-secondary"
                  : "bg-gradient-to-r from-light-primary to-dark-quaternary dark:from-dark-primary dark:to-dark-quaternary"
              }`}
              style={index !== 0 ? scaleStyle : {}}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="text-xl font-semibold text-dark-primary dark:text-light-primary">
                    {transfer.type === "incoming" ? "Incoming" : "Outgoing"}
                  </div>
                  <div className="text-base font-semibold drop-shadow-md text-gray-500">
                    {transfer.senderUsername
                      ? transfer.senderUsername
                      : transfer.recipientUsername}
                    {transfer.senderUsername && transfer.recipientUsername
                      ? ` / ${transfer.recipientUsername}`
                      : ""}
                  </div>
                </div>
                <div className="text-xl font-semibold text-dark-primary dark:text-light-primary">
                  {new Intl.NumberFormat(userLocale, {
                    style: "currency",
                    currency: transfer.currency,
                  }).format(transfer.amount)}
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    </div>
  );
};

export default TransferSection;
