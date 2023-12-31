import React, { useState, useEffect } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TablePagination from "./TablePagination";
import TransferFilter from "./TransferFilter";

function TransferTable({ transfers }) {
  const [filteredTransfers, setFilteredTransfers] = useState(transfers);
  const [currentPage, setCurrentPage] = useState(1);
  const [transfersPerPage, setTransfersPerPage] = useState(5);
  const [filterType, setFilterType] = useState("All");
  const [desc, setDesc] = useState(true);
  const [sortKey, setSortKey] = useState("timestamp");

  const sortAndUpdateTransfers = () => {
    const sortedTransfers = [...filteredTransfers];
    sortedTransfers.sort((a, b) => {
      if (sortKey === "date") {
        return desc
          ? b.timestamp.localeCompare(a.timestamp)
          : a.timestamp.localeCompare(b.timestamp);
      } else if (sortKey === "user") {
        const userA = a.senderUsername || a.recipientUsername;
        const userB = b.senderUsername || b.recipientUsername;

        return desc ? userB.localeCompare(userA) : userA.localeCompare(userB);
      } else if (sortKey === "amount") {
        return desc ? b.amount - a.amount : a.amount - b.amount;
      }
      return 0;
    });
    setFilteredTransfers(sortedTransfers);
  };

  // Sorting logic:
  useEffect(() => {
    sortAndUpdateTransfers();
  }, [desc, sortKey]);

  const toggleSort = (key) => () => {
    if (sortKey === key) {
      setDesc(!desc);
    } else {
      setSortKey(key);
      setDesc(true);
    }
  };

  return (
    <div className="antialiased dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary rounded-lg">
      <div className="container mx-auto px-4 sm:px-8 ">
        <div className="py-5">
          <div>
            <h1 className="text-3xl dark:text-light-primary font-semibold text-center leading-tight">
              Transfers
            </h1>
          </div>
          <TransferFilter
            filterType={filterType}
            transfers={transfers}
            setFilterType={setFilterType}
            setFilteredTransfers={setFilteredTransfers}
            transfersPerPage={transfersPerPage}
            setTransfersPerPage={setTransfersPerPage}
          />
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 ">
            <div className="inline-block min-w-full shadow">
              <table className="table-auto min-w-full leading-normal shadow-xl shadow-light-quaternary dark:shadow-dark-primary  border-2 border-separate border-light-quaternary dark:border-dark-primary rounded-t-lg">
                <colgroup>
                  <col className="w-1/4" ></col>
                  <col className="w-1/4"></col>
                  <col className="w-1/4"></col>
                  <col className="w-1/4"></col>
                </colgroup>
                <TableHeader toggleSort={toggleSort} />
                <TableBody
                  transfers={filteredTransfers}
                  currentPage={currentPage}
                  transfersPerPage={transfersPerPage}
                />
              </table>
              <TablePagination
                transfers={filteredTransfers}
                currentPage={currentPage}
                transfersPerPage={transfersPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TransferTable;
