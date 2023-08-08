import React from "react";
import WalletBalance from "../WalletBalance";
import AuthContext from "../../context/AuthContext";
import { ConfirmDialog } from "../dialogs/ConfirmDialog";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserProfileTab({ balance }) {
  const { user } = useAuth();
  const { logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <div className="mx-auto max-w-xs p-4 rounded-lg shadow-2xl dark:shadow-dark-primary dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary">
      <div className="text-center">
        <svg
          aria-hidden="true"
          role="img"
          className="w-24 h-24 text-primary-dark dark:text-light-primary mx-auto rounded-full"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M172 120a44 44 0 1 1-44-44a44 44 0 0 1 44 44Zm60 8A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-153.8 58.4a81.3 81.3 0 0 1 24.5-23a59.7 59.7 0 0 0 82.6 0a81.3 81.3 0 0 1 24.5 23A87.6 87.6 0 0 0 216 128Z"
          ></path>
        </svg>
        <p className="mt-2 text-lg font-semibold dark:text-light-primary">
          {user.data.username}
        </p>
        <p className="text-sm dark:text-light-primary">{user.data.email}</p>
        <div className="mt-4">
          <Link to="/profile">
            <button className="w-full py-2 px-4 text-sm font-semibold dark:text-light-primary bg-primary-light dark:bg-dark-primary rounded-full dark:hover:bg-dark-secondary">
              Manage Your Account
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-2 mb-1">
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
