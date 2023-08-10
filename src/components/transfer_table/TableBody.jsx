import React from "react";
import { Avatar } from "@mui/material";

function TableBody({ transfers, currentPage, transfersPerPage }) {
  const startIndex = (currentPage - 1) * transfersPerPage;
  const endIndex = Math.min(startIndex + transfersPerPage, transfers.length);
  const limitedTransfers = transfers.slice(startIndex, endIndex);
// TODO: Get currency setting from user profile (to add to backend first)
  return (
    <tbody>
      {limitedTransfers.map((transfer, index) => (
        <tr
          key={index}
          className="dark:bg-dark-primary border-b dark:border-dark-tertiary"
        >
          <td className="px-5 py-5  dark:border-dark-tertiary text-sm font-semibold rounded-bl-lg">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10">
                <Avatar />
              </div>
              <div className="ml-3">
                <p className="dark:text-light-primary whitespace-nowrap">
                  {transfer.recipientUsername}
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm font-semibold">
            <p className="dark:text-dark-tertiary whitespace-no-wrap">
              {new Intl.NumberFormat("de-DE",{
                style: "currency",
                currency: "EUR",
              }).format(transfer.amount)}
            </p>
          </td>
          <td className="px-5 py-5 font-semibold  text-sm">
            <p className="dark:text-dark-tertiary whitespace-no-wrap">
              {transfer.timestamp}
            </p>
          </td>
          <td className="px-5 py-5 font-semibold text-sm rounded-br-lg">
            <span className="relative inline-block px-3 py-1 font-semibold dark:text-light-primary leading-tight">
              <span
                aria-hidden
                className={`absolute inset-0 ${
                  transfer.type === "incoming" ? "bg-green-400" : "bg-red-500"
                } opacity-50 rounded-full`}
              ></span>
              <span className="relative">
                {transfer.type === "incoming" ? "incoming" : "outgoing"}
              </span>
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
export default TableBody;
