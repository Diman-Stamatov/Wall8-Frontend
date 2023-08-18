import React, { useState } from "react";

function TableHeader({ toggleSort }) {
  return (
    <thead className="dark:bg-dark-secondary bg-light-quaternary">
      <tr className="dark:text-dark-tertiary text-light-secondary ">
        <th
          onClick={toggleSort("user")}
          className=" px-5 py-3 cursor-pointer text-center text-xs font-semibold  uppercase tracking-wider rounded-tl-lg"
        >
          User
        </th>
        <th
          onClick={toggleSort("amount")}
          className="cursor-pointer px-5 py-3 text-center text-xs font-semibold  uppercase tracking-wider"
        >
          Amount
        </th>
        <th
          onClick={toggleSort("date")}
          className="cursor-pointer px-5 py-3 text-center text-xs font-semibold  uppercase tracking-wider"
        >
          Date
        </th>
        <th className="px-5 py-3 text-center text-xs font-semibold  uppercase tracking-wider rounded-tr-lg">
          Type
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;
