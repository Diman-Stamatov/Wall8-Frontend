import React from "react";
import WalletBalance from "../WalletBalance";
import AuthContext from "../../context/AuthContext";
import { ConfirmDialog } from "../dialogs/ConfirmDialog";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Avatar } from "@mui/material";

function UserProfileTab({ balance }) {
  const { user } = useAuth();
  const { logoutUser } = useContext(AuthContext);
  const {username, email, photoUrl} = user.data;

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="mx-auto max-w-xs p-4 rounded-lg shadow-m dark:shadow-black outline outline-light-quaternary dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary">
      <div className="text-center">
        <div className="flex justify-center">
          <Avatar
            alt="avatar"
            src={photoUrl}
            sx={{
              width: 86,
              height: 86,
              boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        <p className="mt-2 text-lg font-semibold text-light-quaternary dark:text-light-primary">
          {username}
        </p>
        <p className="text-sm text-light-quaternary dark:text-dark-tertiary">{email}</p>
        <div className="mt-3">
          <Link to="/profile">
            <button className="w-2/8 border shadow-md text-light-quaternary hover:bg-light-quaternary hover:text-light-primary dark:shadow-black border-light-quaternary dark:border-light-primary py-2 px-4 text-sm font-semibold   rounded-full hover:from-light-primary hover:to-light-primary dark:text-light-primary  dark:hover:text-light-quaternary dark:hover:bg-light-primary">
              Manage Account
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-2 mb-1 border rounded-xl shadow-md dark:shadow-black shadow-light-quaternary border-light-quaternary dark:border-light-primary">
        <WalletBalance
          balance={new Intl.NumberFormat("de-DE", {
            currency: "EUR",
            style: "currency",
          }).format(balance)}
        />
      </div>

      
    </div>
  );
}

export default UserProfileTab;
