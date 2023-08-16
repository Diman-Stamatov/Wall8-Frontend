import React from "react";
import StatCard from "./StatCard";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const StatsSection = () => {
  return (
    <div className="px-5 flex flex-col ">
      <div>
        <h1 className="ml-5 font-medium text-2xl mb-5">Statistics</h1>
      </div>
      <div className="flex space-x-11 px-5">
        <div
          className="grid grid-cols-2 gap-6 pr-6"
          style={{ width: "500px", height: "360px" }}
        >
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        {/* Big Button */}
        <div className="flex flex-col justify-center items-center p-4  shadow ml-4">
          <Link to={`transfer`}>
            <PaperAirplaneIcon
              className="ml-20 hover:scale-y-150 cursor-pointer hover:-translate-y-2 h-12  w-12 text-blue-500"
              style={{ width: "120px", height: "120px" }}
            />
          </Link>
          <p className="mt-2 ml-20 text-center font-extrabold text-3xl">
            Transfer
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
