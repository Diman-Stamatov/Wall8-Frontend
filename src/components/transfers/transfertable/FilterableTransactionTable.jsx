import React from "react";
import TrSearchBar from "./TrSearchBar";
import TransactionTable from "./TransactionTable";
import { useState } from "react";

const FilterableTransactionTable = ({ transactions }) => {
  const [filterText, setFilterText] = useState("");
  const [incomingOnly, setIncomingOnly] = useState(false);
  const [outgoingOnly, setOutgoingOnly] = useState(false);

  return (
    <div>
      <TrSearchBar
        filterText={filterText}
        incomingOnly={incomingOnly}
        outgoingOnly={outgoingOnly}
        onFilterTextChange={setFilterText}
        onIncomingOnlyChange={setIncomingOnly}
        onOutgoingOnlyChange={setOutgoingOnly}
      />
      <div className="flex-auto py-8 justify-center">
        <TransactionTable
          transactions={transactions}
          filterText={filterText}
          incomingOnly={incomingOnly}
          outgoingOnly={outgoingOnly}
        />
      </div>
    </div>
  );
};

export default FilterableTransactionTable;
