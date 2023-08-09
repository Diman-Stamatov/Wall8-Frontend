import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../ThemeProvider";

const MainHeader = () => {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { logoutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <header className="z-50 sticky top-0 rounded-b-xl p-5 flex dark:bg-dark-primary outline dark:outline-dark-quaternary justify-between items-center shadow-md">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden rounded-full">
        <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
      </div>
      <p className="text-2xl mr-auto pl-3">{user.data.username}</p>

      <div className="flex-grow mx-10 flex justify-center">
        <input
          style={{ transition: "all .15s ease" }}
          type="text"
          placeholder="Search..."
          className="w-1/2 px-3 py-2 transfer-input rounded-xl shadow-md dark:bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-dark-secondary focus:border-transparent"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          className="w-10 h-10 p-3 rounded-full bg-gray-100 dark:bg-gray-600"
          onClick={toggleTheme}
        ></button>
      </div>
    </header>
  );
};

export default MainHeader;
