import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserSection() {
  const { user } = useAuth();
  const { username, email, photoUrl } = user.data;

  return (
    <div className="dark:bg-to-t dark:from-dark-primary dark:to-light-quaternary border dark:border-light-secondary mt-5 flex justify-between rounded-xl shadow-xl px-2 py-10 mb-2">
      <Avatar
        src={photoUrl}
        className="shadow-md dark:shadow-light-"
        sx={{ width: "180px", height: "180px" }}
      />
      <div className="self-center">
        <h1 className="font-semibold dark:text-light-primary ">{username}</h1>
        <p className="ml-2 text-sm font-semibold">{email}</p>
      </div>
      <Link to={`profile/${username}`} className="self-end">
        <p>account settings</p>
      </Link>
    </div>
  );
}

export default UserSection;
