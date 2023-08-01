import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineUserCircle } from "react-icons/hi";
import { TabsDefault } from "./TabsDefault";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const MainHeader = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  const { logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <header className="p-5 flex bg-gray-950 justify-between items-center shadow-md">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>
      <p className="text-2xl mr-auto pl-3">{user.data.username}</p>
      <div className="flex-grow mx-10 flex justify-center">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 px-3 py-2 rounded border-separate focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent"
        />
      </div>
      <div className="flex items-center">
        <button
          onClick={handleLogout}
          className="p-2 bg-red-500 text-white rounded"
        >
          Logout <AiOutlineLogout className="inline" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
