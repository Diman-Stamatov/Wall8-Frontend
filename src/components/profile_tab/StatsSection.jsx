import React, { useState, useEffect } from "react";
import StatCard from "./StatCard";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

import RefreshButton from "../RefreshButton";
import { useUserLocale } from "../../context/LocaleContext";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

import { Box } from "@mui/system";

const StatsSection = () => {
  const { userLocale } = useUserLocale();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [incomeBody, setIncomeBody] = useState(null);
  const [dates, setDates] = useState(null);
  const [sentBody, setSentBody] = useState(null);
  const [sentDates, setSentDates] = useState(null);
  const [transfersSent, setTransfersSent] = useState(null);
  const [transfersReceived, setTransfersReceived] = useState(null);

  const formatToISO8601 = (date) => {
    return date.toISOString().slice(0, 19) + "Z";
  };

  const fetchData = async () => {
    setIsLoading(true);

    const today = new Date();
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    const start = formatToISO8601(oneWeekAgo);
    const end = formatToISO8601(today);
    try {
      await axios
        .get(
          `http://localhost:5120/api/virtual-wallet/users/${user.data.id}/statistics`,
          {
            params: {
              startDate: start,
              endDate: end,
            },
            withCredentials: true,
          }
        )
        .then((response) => {
          setIncomeBody(
            new Intl.NumberFormat(userLocale, {
              style: "currency",
              currency: response.data.currency,
            }).format(response.data.amountReceived)
          );
          setSentBody(
            new Intl.NumberFormat(userLocale, {
              style: "currency",
              currency: response.data.currency,
            }).format(response.data.amountSent)
          );
          setTransfersSent(response.data.transfersSent);
          setTransfersReceived(response.data.transfersReceived);
          const endDate = new Date(response.data.endDate);
          const startDate = new Date(response.data.startDate);
          const endDay = endDate.getDate();
          const startDay = startDate.getDate();
          const monthIndex = endDate.getMonth();
          const month = MONTHS[monthIndex];
          setDates(`${startDay} - ${endDay} ${month}`);
        });
    } catch (error) {
      console.log("STATS ERROR:", error);
    }
    setIsLoading(false);
  };

 

  return (
    <div className="px-5 flex flex-col mt-5 ">
      <div className="flex ">
        <h1 className="ml-5 font-medium text-center text-2xl dark:text-light-primary mb-5">
          Statistics
        </h1>
        <RefreshButton isLoading={isLoading} fetchData={fetchData} />
      </div>
      <div className="flex space-x-11 px-5">
        <div
          className="grid grid-cols-2 gap-10 pr-6"
          style={{ width: "500px", height: "360px" }}
        >
          <StatCard
            header="Received (last week)"
            body={incomeBody}
            dates={dates}
          />
          <StatCard header="Sent (last week)" body={sentBody} dates={dates} />
          <StatCard
            header="Transfers sent (last week)"
            body={transfersSent}
            dates={dates}
          />
          <StatCard
            header="Transfers received (last week)"
            body={transfersReceived}
            dates={dates}
          />
        </div>
        {/* Big Button */}
        
        <div className="flex flex-col justify-center items-center p-4 ml-4">
        {!user.data.isBlocked?
          <><Link to={`transfer`}>
            <PaperAirplaneIcon
              className="ml-20 hover:scale-y-150 cursor-pointer h-12  w-12 text-blue-500"
              style={{ width: "120px", height: "120px" }}
            />
          </Link>
          <p className="mt-2 ml-20 text-center font-extrabold text-3xl dark:text-light-primary">
            Transfer
          </p>
          </> : 
          <div className="rounded-lg  shadow-2xl shadow-light-quaternary dark:text-light-primary dark:bg-gradient-to-b
           dark:from-dark-secondary dark:to-dark-primary"
          style={{width: "210px", height: "200px", textAlign:"justify", padding:10}}>
            Your account has been <span style={{color:"red", fontWeight: 'bold'}}>blocked </span> 
            and can therefore not send or receive any transfers. 
            Please contact our support team for any further questions regarding this issue.</div>}
        </div> 
      </div>
    </div>
  );
};

export default StatsSection;
