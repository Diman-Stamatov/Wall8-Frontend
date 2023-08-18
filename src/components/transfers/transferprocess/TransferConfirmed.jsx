import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Avatar } from "@mui/material";
import { useTransfer } from "../../../context/TransferContext";
import { useUserLocale } from "../../../context/LocaleContext";
import axios from "axios";

function TransferConfirmed() {
  const navigate = useNavigate();
  const userLocale = useUserLocale();
  const [recAvatar, setRecAvatar] = useState("");
  const [sendAvatar, setSendAvatar] = useState("");

  const transfer = useTransfer();
  const {
    senderUsername,
    recipientUsername,
    baseAmount,
    baseCurrency,
    targetAmount,
    targetCurrency,
  } = transfer.transfer;

  const fetchRecipient = async () => {
    await axios
      .get(
        `http://localhost:5120/api/virtual-wallet/users/profile/${recipientUsername}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setRecAvatar(response.data.photoUrl);
      });
  };

  const fetchSender = async () => {
    await axios
      .get(
        `http://localhost:5120/api/virtual-wallet/users/profile/${senderUsername}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        setSendAvatar(response.data.photoUrl);
      });
  };
  useEffect(() => {
    fetchSender();
    fetchRecipient();
  });

  const exchangeRate = transfer.transfer.exchangeData.conversion_rate;

  const formattedBase = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: baseCurrency,
  }).format(baseAmount);
  const formattedTarget = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: targetCurrency,
  }).format(targetAmount);

  return (
    <div style={{ width: "400px" }}>
      <h1 className="text-4xl text-center mb-4">Transfer Complete</h1>
      <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
        <div className="grid grid-cols-1 divide-y space-y-1">
          <div className="pb-2 dark:text-light-primary flex-col justify-between items-center space-y-0">
            <header className="text-center text-3xl">Amount</header>
            <div className="text-center">
              <label className="mt-1 dark:text-dark-tertiary text-center text-sm font-medium">
                From
              </label>
            </div>
            <div className="flex justify-center ">
              <div className="flex items-center">
                <span className="mt-1 dark:text-dark-quaternary font-semibold my-auto text-lg">
                  {formattedBase}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-2 my-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.293 4.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="mt-1 dark:text-light-secondary font-semibold my-auto text-lg">
                  {formattedTarget}
                </span>
              </div>
            </div>
            <div className="mt-1 dark:text-dark-secondary text-center text-xs">
              At <span className="text-green-500 ">{exchangeRate}</span> rate.
            </div>
          </div>
          <div className="py-2 dark:text-light-primary flex justify-between ">
            <div className="flex items-center">
              <Avatar src={sendAvatar} className="mr-1" />
              <p>{senderUsername}</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mx-4 my-auto text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.293 10a1 1 0 112 0v.001H7a1 1 0 110 2H6.293l1.147 1.146a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 111.414 1.414L6.293 10H7a1 1 0 110 2H6.293l1.147 1.146a1 1 0 11-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 111.414 1.414L6.293 10H7a1 1 0 110 2H6.293l1.147 1.146a1 1 0 01-1.414 1.414l-2-2a1 1 0 010-1.414l2-2a1 1 0 111.414 1.414L6.293 10H7a1 1 0 110 2H6.293z"
                clipRule="evenodd"
              />
            </svg>
            <div className="flex items-center">
              <p>{recipientUsername}</p>
              <Avatar src={recAvatar} className="ml-1" />
            </div>
          </div>
          <div className="pt-2 dark:text-light-primary text-center">
            <p className="text-lg">
              {recipientUsername} thanks you for your transfer!
            </p>
            <p className="text-sm">We're here to assist you.</p>
          </div>
          <div className="flex justify-center">
            <button onClick={() => navigate("/")} className="mt-2 self-center">
              <h1>Home</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferConfirmed;
