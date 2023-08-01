import React, { useState } from "react";
import TransactionRow from "./TransactionRow";

const TransactionTable = ({
  transactions,
  filterText,
  incomingOnly,
  outgoingOnly,
}) => {
  const filteredTransactions = transactions.filter((transaction) => {
    const textMatch = transaction.name
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const incomingMatch = !incomingOnly || transaction.type === "incoming";
    const outgoingMatch = !outgoingOnly || transaction.type == "outgoing";
    return textMatch && incomingMatch && outgoingMatch;
  });

  return (
    <div className=" overflow-x-auto border-2 border-green-700 shadow-md sm:rounded-lg">
      <table className="table-fixed md:table-fixed min-w-full divide-y text-gray-500 dark:text-gray-400 divide-green-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-12 py-4">
              Name
            </th>
            <th scope="col" className="px-12 py-4">
              Amount
            </th>
            <th scope="col" className="px-12 py-4">
              Date
            </th>
            <th scope="col" className="px-12 py-4">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="bg-gray-800 divide-y divide-gray-200">
          {filteredTransactions.map((transaction) => (
            <TransactionRow key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
