import React from "react";
import { Link } from "react-router-dom";

const data = [
  ["John Doe", "johndoe@example.com", "Developer", "New York"],
  ["Jane Smith", "janesmith@example.com", "Designer", "Los Angeles"],
  ["Michael Johnson", "michael@example.com", "Manager", "Chicago"],
  ["Emily Brown", "emily@example.com", "Writer", "San Francisco"],
  ["David Lee", "david@example.com", "Analyst", "Seattle"],
];

const TransferSection = () => {
  return (
    <div className="px-5 flex flex-col justify-center ">
      <h1 className="font-medium text-2xl text-center dark:text-light-primary">Recent Transfers</h1>
      <table className="table-auto overflow-hidden border-collapse shadow-2xl shadow-light-quaternary rounded-lg mt-4  mr-2">
        <thead>
          <tr className="dark:text-light-primary shadow-sm shadow-light-quaternary dark:bg-gradient-to-r dark:from-dark-secondary dark:to-dark-primary ">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody className=" rounded-xl">
          {data.map((row, index) => (
            <tr key={index} className="  hover:text-light-secondary dark:hover:text-dark-tertiary dark:hover:shadow-xl hover:-translate-y-2 hover:scale-y-105 text-center dark:text-light-primary rounded-xl dark:bg-gradient-to-r dark:from-dark-secondary dark:to-dark-primary">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className=" px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default TransferSection;
