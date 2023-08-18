import { useContext, useState, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { ThemeContext } from "../ThemeProvider";
import AccountMenu from "./AccountMenu";
import { useUsers } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGitlab } from "react-icons/fa";
import { Avatar } from "@mui/material";

const MainHeader = () => {
  const { user } = useContext(AuthContext);
  const { toggleTheme } = useContext(ThemeContext);
  const { users, dispatch } = useUsers();
  const [searchValue, setSearchValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
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
  const redirectToGitLab = () => {
    window.open(`https://gitlab.com/finalgroup3/virtual-wallet-project`);
    window.open(`https://gitlab.com/finalgroup3/virtual-wallet-react`);
  };
  const filteredUsers = users.filter((user) => {
    const filteredMatches =
      user.username.toLowerCase().includes(searchValue.toLowerCase()) ||
      user.email.toLowerCase().includes(searchValue.toLowerCase());
    return filteredMatches;
  });

  const handleSearchChange = (event) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
    setShowDropdown(inputValue !== "");
  };

  let handleInputBlurTimeout;

  const handleInputBlur = () => {
    clearTimeout(handleInputBlurTimeout);
    handleInputBlurTimeout = setTimeout(() => {
      setShowDropdown(false);
    }, 500);
  };
  const goToUserProfile = (username) => {
    window.location.assign(`http://localhost:3006/profile/${username}`);
    // navigate(`profile/${username}`, { replace: true });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <header className="flex z-40 sticky top-0 rounded-b-xl p-5 bg-light-primary dark:bg-dark-primary outline outline-light-quaternary dark:outline-dark-quaternary justify-between items-center shadow-md">
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
          <ul className="bg-light-quaternary dark:bg-dark-primary rounded-xl w-full mt-1 border border-light-quaternary dark:border-dark-secondary shadow-sm shadow-light-quaternary dark:shadow-dark-tertiary absolute">
            {filteredUsers.map((user, index) => {
              return ( 
                <li
                  key={index}
                  className="p-2 dark:hover:bg-dark-secondary cursor-pointer rounded-lg  hover:bg-light-tertiary"
                  onClick={() => goToUserProfile(user.username)}
                >
                  <div className="flex items-center">
                    <Avatar
                      src={user.photoUrl}
                      alt="Avatar"
                      sx={{ height: "36px", width: "36px" }}
                    />
                    <div className="flex flex-col justify-start">
                      <p className="ml-2 font-semibold text-light-primary dark:text-light-primary">
                        {user.username}
                      </p>
                      <p className="ml-2 text-sm font-light text-light-primary dark:text-dark-tertiary">
                        {user.email} | {user.phoneNumber}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <button className="flex items-center justify-center">
        <FaGitlab size={30} onClick={redirectToGitLab} />
      </button>
    </header>
  );
};

export default MainHeader;
