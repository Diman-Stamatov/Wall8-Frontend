import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserSection() {
  const { user } = useAuth();
  const { username, email, photoUrl } = user.data;

  return (
    <div className="relative bg-gradient-to-r from-light-quaternary to-light-primary dark:text-light-primary dark:from-dark-primary dark:to-light-quaternary dark:border-light-secondary mt-5 flex justify-between rounded-xl shadow-md px-2 py-10 mb-2">
      <Avatar
        src={photoUrl}
        className="shadow-sm dark:shadow-light-secondary ml-5"
        sx={{ width: "180px", height: "180px" }}
      />
      <div className="self-center m-auto">
        <h1 className="font-semibold text-4xl  dark:text-light-primary ">
          {username}
        </h1>
        <p className=" ml-2 text-sm dark:text-dark-tertiary font-semibold mt-2">{email}</p>
      </div>
      <div className="absolute bottom-0 right-0 p-2">
        <Link to={`profile/${username}`}>
          <p className="uppercase text-xs dark:hover:text-dark-secondary dark:text-dark-tertiary font-black">account settings</p>
        </Link>
      </div>
    </div>
  );
}

export default UserSection;
