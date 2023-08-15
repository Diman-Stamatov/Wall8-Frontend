import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../ThemeProvider";
import AccountMenu from "./AccountMenu";
import { useUsers } from "../context/UserContext";
import axios from "axios";

const MainHeader = () => {
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { users, dispatch } = useUsers();
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  function getAllUsers() {
    dispatch({
      type: "FETCH_USERS_LOADING",
      payload: true,
    });

    axios
      .get("http://localhost:5120/api/virtual-wallet/users/all", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_USERS_ERROR",
          payload: error,
        });
      });
  }
  const filteredUsers = users.filter((user) => {
    const filteredMatches =
      user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase());
    return filteredMatches;
  });

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    setShowDropdown(true);
  };

  const handleInputBlur = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <header className="flex z-40 sticky top-0 rounded-b-xl p-5 dark:bg-dark-primary outline outline-light-quaternary dark:outline-dark-quaternary justify-between items-center shadow-md">
      <div className="flex items-center bg-gradient-to-r from-light-quaternary to-light-primary  dark:bg-gradient-to-r  dark:from-dark-primary dark:to-light-quaternary shadow-lg pl-2 py-1 pr-2 rounded-2xl">
        <AccountMenu />
        <p className="text-2xl mr-auto pl-3">{user.data.username}</p>
      </div>
      <div className="mx-10 w-1/2 relative">
        <input
          style={{ transition: "all .15s ease" }}
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
          onBlur={handleInputBlur}
          className="w-full px-3 py-2 transfer-input rounded-xl shadow-md bg-gradient-to-r from-light-quaternary to-light-primary  dark:from-dark-tertiary dark:to-dark-primary focus:outline-none focus:ring-2 focus:ring-light-quaternary  dark:focus:ring-dark-secondary focus:border-transparent"
        />
        {showDropdown && (
          <ul className="dark:bg-dark-primary rounded-xl w-full mt-1 border dark:border-dark-secondary shadow-sm dark:shadow-dark-tertiary absolute">
            {filteredUsers.map((user, index) => {
              return (
                <li
                  key={index}
                  className="p-2 hover:dark:bg-dark-secondary cursor-pointer rounded-lg"
                >
                  <div className="flex flex-col justify-start">
                    <p className="font-semibold dark:text-light-primary">{user.username}</p>
                    <p className="text-sm font-light dark:text-dark-tertiary">{user.email} | {user.phoneNumber}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
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
