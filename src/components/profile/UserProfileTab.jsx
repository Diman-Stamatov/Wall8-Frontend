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

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="mx-auto max-w-xs p-4 rounded-lg shadow-md dark:shadow-black dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary">
      <div className="text-center">
        <div className="flex justify-center">
          <Avatar
            alt="avatar"
            src={user.data.photoUrl}
            sx={{
              width: 86,
              height: 86,
              boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
        <p className="mt-2 text-lg font-semibold dark:text-light-primary">
          {user.data.username}
        </p>
        <p className="text-sm dark:text-dark-tertiary">{user.data.email}</p>
        <div className="mt-3">
          <Link to="/profile">
            <button className="w-2/8 border shadow-md dark:shadow-black dark:border-light-primary py-2 px-4 text-sm font-semibold dark:text-light-primary bg-primary-light dark:bg-dark-primary rounded-full dark:hover:bg-dark-secondary">
              Manage Account
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-2 mb-1 border rounded-xl shadow-md dark:shadow-black dark:border-light-primary">
        <WalletBalance
          balance={new Intl.NumberFormat("de-DE", {
            currency: "EUR",
            style: "currency",
          }).format(balance)}
        />
      </div>

      <div className=" dark:bg-dark-primary text-center">
        <ConfirmDialog
          buttonName="Logout"
          title="Confirm Logout"
          message="Are you sure you want to logout?"
          onConfirm={handleLogout}
          onCancel={() => console.log("logout cancelled")}
        />
      </div>
    </div>
  );
}

export default UserProfileTab;
