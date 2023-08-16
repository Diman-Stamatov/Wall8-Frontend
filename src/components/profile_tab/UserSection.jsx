import { Avatar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function UserSection() {
  const { user } = useAuth();
  const { username, email, photoUrl } = user.data;

  return (
    <div className=" shadow-light-quaternary dark:bg-gradient-to-t dark:text-light-primary dark:from-dark-primary dark:to-light-quaternary border  dark:border-light-secondary mt-5 flex justify-between rounded-xl shadow-2xl px-2 py-10 mb-2">
      <Avatar
        src={photoUrl}
        className="shadow-md dark:shadow-light-secondary m-auto"
        sx={{ width: "180px", height: "180px" }}
      />
      <div className="self-center m-auto">
        <h1 className="font-semibold dark:text-light-primary ">{username}</h1>
        <p className=" text-center text-sm font-semibold">{email}</p>
        <Link to={`profile/${username}`} className="self-end text-center">
        <p>account settings</p>
      </Link>
      </div>
      
    </div>
  );
}

export default UserSection;
