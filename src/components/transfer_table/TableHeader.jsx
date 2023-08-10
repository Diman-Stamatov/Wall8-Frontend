import React from "react";

function TableHeader() {
  return (
    <thead className="dark:bg-dark-secondary">
      <tr className="dark:text-dark-tertiary">
        <th className=" px-5 py-3 border-b text-left text-xs font-semibold  uppercase tracking-wider rounded-tl-lg">
          User
        </th>
        <th className="px-5 py-3 border-b text-left text-xs font-semibold  uppercase tracking-wider">
          Amount
        </th>
        <th className="px-5 py-3 border-b text-left text-xs font-semibold  uppercase tracking-wider">
          Date
        </th>
        <th className="px-5 py-3 border-b text-left text-xs font-semibold  uppercase tracking-wider rounded-tr-lg">
          Type
        </th>
      </tr>
    </thead>
  );
}

export default TableHeader;