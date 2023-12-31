import React from "react";
import TransferTable from "../transfer_table/TransferTable";

function TransferTab({ transfers }) {
  return (
    <div className=" ">
      <div className="flex justify-center z-50"></div>
      <TransferTable transfers={transfers} />
    </div>
  );
}

export default TransferTab;
