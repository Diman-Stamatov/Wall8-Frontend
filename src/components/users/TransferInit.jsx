import React, { useState } from "react";
import TransferButton from "../transfers/TransferButton.jsx";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useUserLocale } from "../../context/LocaleContext.jsx";
function TransferInit() {
  const { user } = useAuth();
  const { userLocale } = useUserLocale();
  const [mostRecentTransfer, setMostRecentTransfer] = useState({});
  const {
    targetAmount,
    recipientUsername,
    targetCurrency,
    senderUsername,
    type,
  } = mostRecentTransfer;
  const formattedAmount = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: "EUR", // ! hardcoded for now, when I fix the transfers (make new ones) we'll use the `targetCurrency` here.
  }).format(targetAmount);

  function fetchMostRecentTransfer() {
    axios
      .get(
        "http://localhost:5120/api/virtual-wallet/transfers/filter?BySender=admin&SortBy=transferdate&OrderBy=descending&PageSize=1",
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        const transfer = response.data.transfers.items[0];
        if (transfer.senderId === user.data.id) {
          const modifiedTransfer = {
            ...transfer,
            type: "outgoing",
          };
          setMostRecentTransfer(modifiedTransfer);
        } else {
          const modifiedTransfer = {
            ...transfer,
            type: "incoming",
          };
          setMostRecentTransfer(modifiedTransfer);
        }
      })
      .catch((error) => {
        console.log("MOST RECENT TRANSFER ERROR:", error);
      });
  }

  useEffect(() => {
    fetchMostRecentTransfer();
  }, []);

  return (
    <div className=" p-4 rounded-lg shadow-m dark:shadow-black outline outline-light-quaternary dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary">
      <h1 className="font-semibold drop-shadow-lg dark:text-light-primary text-dark-primary flex-nowrap">
        Initiate Transfer
      </h1>
      <TransferButton />
      <span>
        Most recent transfer:
        {type === "outgoing" ? (
          <>
            <p>To: {recipientUsername}</p>
            <p>Amount sent: {formattedAmount}</p>
          </>
        ) : (
          <>
            <p>From: {senderUsername}</p>
            <p>Amount received: {formattedAmount}</p>
          </>
        )}
      </span>
    </div>
  );
}

export default TransferInit;
