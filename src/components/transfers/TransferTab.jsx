import React from "react";
import FilterableTransactionTable from "../transfertable/FilterableTransactionTable";
import { Button } from "@mui/material";
import TransferStatCard from "../transfers/TransferStatCard";

function TransferTab({ transactions }) {
  return (
    <div className="transfer-tab-bg">
      <div className="relative h-screen w-full">
        <div className="flex flex-row justify-between relative z-50">
          <div className="my-auto ml-5">
            <h1
              style={{ transition: "all .15s ease" }}
              className="pb-5 text-slate-400 hover:text-slate-300 font-medium drop-shadow-md"
            >
              Recent Transfers
            </h1>
            <FilterableTransactionTable transactions={transactions} />
            <Button variant="text" size="large" color="info">
              <span>View All</span>
            </Button>
          </div>
          <div className="flex flex-col justify-end my-auto">
            <h1
              style={{ transition: "all .15s ease" }}
              className="pb-2 text-slate-400 font-medium drop-shadow-md hover:text-slate-300"
            >
              Transfer Stats
            </h1>
            <div className="grid grid-cols-2 my-auto">
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
