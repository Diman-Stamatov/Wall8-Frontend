import React from "react";
import StatCard from "./StatCard";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Box } from "@mui/system";

const StatsSection = () => {

  const { user } = useAuth();

  return (
    <div className="px-5 flex flex-col mt-5 ">
      <div>
      <h1 className="ml-5 font-medium text-center text-2xl dark:text-light-primary mb-5">Statistics</h1>
      </div>
      <div className="flex space-x-11 px-5">
        
        <div
          className="grid grid-cols-2 gap-10 pr-6"
          style={{ width: "500px", height: "360px" }}
        >
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        {/* Big Button */}
        
        <div className="flex flex-col justify-center items-center p-4 ml-4">
        {!user.data.isBlocked?
          <><Link to={`transfer`}>
            <PaperAirplaneIcon
              className="ml-20 hover:scale-y-150 cursor-pointer hover:-translate-y-2 h-12  w-12 text-blue-500"
              style={{ width: "120px", height: "120px" }}
            />
          </Link>
          <p className="mt-2 ml-20 text-center font-extrabold text-3xl dark:text-light-primary">
            Transfer
          </p>
          </> : 
          <div className="rounded-lg  shadow-2xl shadow-light-quaternary dark:text-light-primary dark:bg-gradient-to-b
           dark:from-dark-secondary dark:to-dark-primary"
          style={{width: "210px", height: "200px", textAlign:"justify", padding:10}}>
            Your account has been <span style={{color:"red", fontWeight: 'bold'}}>blocked </span> 
            and can therefore not send or receive any transfers. 
            Please contact our support team for any further questions regarding this issue.</div>}
        </div> 
      </div>
    </div>
  );
};

export default StatsSection;
