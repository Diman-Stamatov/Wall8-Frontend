import React from "react";
import { Avatar } from "@mui/material";
import { useUserLocale, formatDate } from "../../context/LocaleContext";
import { useState, useEffect } from "react";
import axios from "axios";

function TableBody({ transfers, currentPage, transfersPerPage }) {
  const startIndex = (currentPage - 1) * transfersPerPage;
  const endIndex = Math.min(startIndex + transfersPerPage, transfers.length);
  const  userLocale  = useUserLocale();

  transfers.sort((a, b) => {
    return b.timestamp.localeCompare(a.timestamp);
  });
  const limitedTransfers = transfers.slice(startIndex, endIndex);
  const [avatars, setAvatars] = useState({});

  const fetchAvatar = async (username) => {
    try {
      const response = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/profile/${username}`,
        {
          withCredentials: true,
        }
      );
      setAvatars((prevAvatars) => ({
        ...prevAvatars,
        [username]: response.data.photoUrl,
      }));
    } catch (error) {
      console.log("AVATAR ERROR", error);
    }
  };

  useEffect(() => {
    // Fetch avatars for unique usernames only
    const uniqueUsernames = new Set();
    limitedTransfers.forEach((transfer) => {
      if (transfer.senderUsername) {
        uniqueUsernames.add(transfer.senderUsername);
      }
      if (transfer.recipientUsername) {
        uniqueUsernames.add(transfer.recipientUsername);
      }
    });

    // Fetch avatars for unique usernames
    uniqueUsernames.forEach((username) => {
      if (!avatars[username]) {
        fetchAvatar(username);
      }
    });
  }, [limitedTransfers, avatars]);

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
                <Avatar
                  src={
                    avatars[transfer.senderUsername] ||
                    avatars[transfer.recipientUsername] ||
                    "default"
                  }
                  alt="Avatar"
                />
              </div>
              <div className="ml-3">
                <p className="dark:text-light-primary font-bold whitespace-nowrap">
                  {transfer.senderUsername
                    ? transfer.senderUsername
                    : transfer.recipientUsername}
                  {transfer.senderUsername && transfer.recipientUsername
                    ? ` / ${transfer.recipientUsername}`
                    : ""}
                </p>
              </div>
            </div>
          </td>
          <td className="px-5 py-5 text-sm font-semibold">
            <p
              className={`${
                transfer.type === "incoming" ? "text-green-600" : "text-red-600"
              } italic font-bold whitespace-no-wrap text-center`}
            >
              {new Intl.NumberFormat(userLocale, {
                style: "currency",
                currency: transfer.currency,
              }).format(transfer.amount)}
            </p>
          </td>
          <td className="px-5 py-5 font-semibold  text-sm">
            <p className="dark:text-dark-tertiary font-mono whitespace-no-wrap text-center">
              {formatDate(transfer.timestamp, userLocale)}
            </p>
          </td>
          <td className={`px-5 py-5 font-semibold text-center rounded-br-lg dark:bg-gradient-to-r ${transfer.type === "incoming" ? " dark:from-dark-primary dark:to-light-secondary" : "dark:from-dark-primary dark:to-dark-quaternary"}`}>
            <span className="text-lg font-semibold dark:text-light-primary text-dark-primary">
              {transfer.type}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
export default TableBody;
