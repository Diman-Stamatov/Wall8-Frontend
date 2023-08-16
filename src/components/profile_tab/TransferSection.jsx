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
      <h1 className="font-medium text-2xl text-start">Recent Transfers</h1>
      <table className="table-auto rounded-xl overflow-hidden border-collapse mr-2">
        <thead>
          <tr className="dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody className=" rounded-xl">
          {data.map((row, index) => (
            <tr key={index} className=" dark:hover:text-dark-tertiary dark:hover:shadow-xl hover:-translate-y-2 hover:scale-y-105 text-center dark:text-light-primary rounded-xl dark:bg-gradient-to-r dark:from-dark-primary dark:to-light-quaternary">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className=" px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="#">
        <p>View All</p>
      </Link>
    </div>
  );
};

export default TransferSection;
