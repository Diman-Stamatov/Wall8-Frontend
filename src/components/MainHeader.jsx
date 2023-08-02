import { useContext } from "react";
import { ConfirmDialog } from "./dialogs/ConfirmDialog";
import AuthContext from "../context/AuthContext";

const MainHeader = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);

  const { logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <header className="p-5 flex bg-slate-800 justify-between items-center shadow-md">
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
      <div className="flex items-center justify-end">
        <ConfirmDialog
          buttonName="Logout"
          title="Confirm Logout"
          message="Are you sure you want to logout?"
          onConfirm={handleLogout}
          onCancel={() => console.log("logout cancelled")}
        />
      </div>
    </header>
  );
};

export default MainHeader;
