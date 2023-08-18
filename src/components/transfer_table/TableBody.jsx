import React from "react";
import { Avatar } from "@mui/material";
import { useUserLocale, formatDate } from "../../context/LocaleContext";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailsModal from "./DetailsModal";
import TransferRow from "./TransferRow";

function TableBody({ transfers, currentPage, transfersPerPage }) {
  const startIndex = (currentPage - 1) * transfersPerPage;
  const endIndex = Number(startIndex) + Number(transfersPerPage);
  const userLocale = useUserLocale();

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

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
    } catch (error) {}
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
          className="dark:bg-dark-primary dark:border-b border-b border-light-quaternary dark:border-dark-tertiary"
        >
          <td className="px-5 py-5 border-light-quaternary  dark:border-dark-tertiary text-sm font-semibold rounded-bl-lg">
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
                    ? transfer.senderUsername.toLowerCase().includes("deleted_")
                      ? "[ANONYMOUS_SENDER]"
                      : transfer.senderUsername
                    : transfer.recipientUsername
                        .toLowerCase()
                        .includes("deleted_")
                    ? "[ANONYMOUS_RECIPIENT]"
                    : transfer.recipientUsername}
                  {transfer.senderUsername && transfer.recipientUsername
                    ? ` / ${transfer.recipientUsername}`
                    : ""}
                </p>
              </div>
            </div>
          </td>
          <TransferRow transfer={transfer} userLocale={userLocale} />
          <td className="px-5 py-5 font-semibold  text-sm">
            <p className="dark:text-dark-tertiary font-mono whitespace-no-wrap text-center">
              {formatDate(transfer.timestamp, userLocale)}
            </p>
          </td>
          <td
            className={`px-5 py-5 font-semibold text-center rounded-br-lg bg-gradient-to-r ${
              transfer.type === "incoming"
                ? " dark:from-dark-primary dark:to-light-secondary from-light-primary to-light-secondary"
                : "dark:from-dark-primary dark:to-dark-quaternary from-light-primary to-dark-quaternary"
            }`}
          >
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
