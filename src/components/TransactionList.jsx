import React from "react";
import { BiTransfer } from "react-icons/bi";

const TransactionList = ({ transactions }) => (
  <div className="container max-h-screen mx-auto p-6 bg-transparent outline-none outline-zinc-700 rounded-xl shadow-md space-y-4">
    <h2 className="text-zinc-500 font-bold text-lg font-roboto">
      Recent Transfers
    </h2>
    {transactions.map((transaction, index) => (
      <div
        key={index}
        className={`p-4 grid grid-cols-2 md:grid-cols-3 gap-4 border-t-2 rounded-lg shadow-sm ${
          transaction.isIncoming
            ? "border-l-4 border-green-500"
            : "border-l-4 border-red-500"
        }`}
      >
        <span className="text-right text-gray-500 text-sm font-roboto">
          {transaction.date}
        </span>
        <span className="text-gray-500 text-xl font-roboto">
          {transaction.description}
          <BiTransfer
            className={`inline ml-2 ${
              transaction.isIncoming ? "text-green-500" : "text-red-500"
            }`}
          />
        </span>
        <span
          className={`font-bold ${
            transaction.isIncoming ? "text-green-500" : "text-red-500"
          }`}
        >
          {transaction.amount.toFixed(2)}
        </span>
        {transaction.isIncoming ? (
          <span className="text-green-500 font-roboto">Incoming</span>
        ) : (
          <span className="text-red-500 font-roboto">Outgoing</span>
        )}
      </div>
    ))}
    <button className="text-gray-800 text-lg font-bold font-roboto">
      View All
    </button>
  </div>
);

export default TransactionList;
