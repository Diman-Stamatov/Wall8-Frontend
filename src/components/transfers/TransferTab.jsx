import React from "react";
import FilterableTransactionTable from "./transfertable/FilterableTransactionTable";
import { Button } from "@mui/material";
import TransferStatCard from "../transfers/TransferStatCard";
import TransferButton from "./TransferButton";
import TransferForm from "./transferprocess/TransferForm";

function TransferTab({ transfers }) {
  return (
    <div className="">
      <div className="relative h-screen w-full">
        <div className="flex flex-row justify-between relative z-50">
          <div className="my-auto ml-5 text-center">
            <h1
              style={{ transition: "all .15s ease" }}
              className="pb-5 dark:text-dark-tertiary pointer-events-none font-medium drop-shadow-md"
            >
              Recent Transfers
            </h1>
            <FilterableTransactionTable transfers={transfers} />
            <Button variant="text" size="large" color="info" >
              <span className="dark:text-light-primary text-center">View All</span>
            </Button>
          </div>
          <div className="my-auto ml-5 text-center">
            <TransferButton />
          </div>
          <div className="pb-12 flex flex-col justify-end my-auto text-center">
            <h1
              style={{ transition: "all .15s ease" }}
              className=" dark:text-dark-tertiary pointer-events-none font-medium drop-shadow-md "
            >
              Transfer Stats
            </h1>
            <div className="grid grid-cols-2 ">
              <TransferStatCard title="Total Transfers" value={32} />
              <TransferStatCard title="Incoming Transfers" value={18} />
              <TransferStatCard title="Outgoing Transfers" value={14} />
              <TransferStatCard
                title="Amount Sent in the Past Week"
                value={23}
              />
              <TransferStatCard
                title="Amount Received in the Past Week"
                value={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferTab;
