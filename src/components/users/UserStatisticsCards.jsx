import React from "react";
import {GiReceiveMoney, GiTakeMyMoney} from "react-icons/gi"
import {MdOutlineAttachMoney, MdOutlineMoneyOffCsred} from "react-icons/md"
function UserStatisticsCards({ transfers }) {
  const TransfersIncoming = transfers.map(
    (transfer) => transfer.type == "incoming"
  );
  const TransfersOutgoing = transfers.map(
    (transfer) => transfer.type == "outgoing"
  );
  const totalIncomingValue = TransfersIncoming.reduce((total, value) => total + value, 0);
  const totalOutgoingValue = TransfersOutgoing.reduce((total, value) => total + value, 0);
  const TransfersIncomingCount = transfers.filter(
    (transfer) => transfer.type === "incoming"
  ).length;
  const TransfersOutgoingCount = transfers.filter(
    (transfer) => transfer.type === "outgoing"
  ).length;
  return (
    
    <div className="grid grid-cols-2 gap-x-36 gap-y-20 mt-24">
      <div className="w-80 h-50 ">
            <div className="relative flex flex-col bg-clip-border rounded-xl dark:bg-white  dark:text-light-quaternary bg-light-quaternary text-white shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                >
                  <MdOutlineAttachMoney size={24} className=""/>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Incoming funds
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {totalIncomingValue}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-80 h-50 ">
            <div className="relative flex flex-col bg-clip-border rounded-xl dark:bg-white  dark:text-light-quaternary bg-light-quaternary text-white shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                >
                  <MdOutlineMoneyOffCsred size={24}/>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Outgoing funds
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {totalOutgoingValue}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-80 h-50 ">
            <div className="relative flex flex-col bg-clip-border rounded-xl dark:bg-white  dark:text-light-quaternary bg-light-quaternary text-white shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                >
                  <GiReceiveMoney size={24} className=""/>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Incoming transfers
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {TransfersIncomingCount}
                </h4>
              </div>
            </div>
          </div>
          <div className="w-80 h-50 ">
            <div className="relative flex flex-col bg-clip-border rounded-xl dark:bg-white  dark:text-light-quaternary bg-light-quaternary text-white shadow-md">
              <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-6 h-6 text-white"
                >
                  <GiTakeMyMoney size={24}/>
                </svg>
              </div>
              <div className="p-4 text-right">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">
                  Outgoing transfers
                </p>
                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">
                  {TransfersOutgoingCount}
                </h4>
              </div>
            </div>
          </div>
          
    </div>
  );
}
export default UserStatisticsCards;
