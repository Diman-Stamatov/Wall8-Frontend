import React, { useState, useEffect } from "react";
import UpdateEmailButton from "../../components/UpdateEmailButton";
import UpdatePhoneNumberButton from "../../components/UpdatePhoneNumberButton";
import UpdatePictureButton from "../../components/UpdatePictureButton";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";


const UserProfile = ({profileUser}) => { 
  const [profileUsername, setProfileUsername] = useState(profileUser.data.username);
  const [phoneNumber, setPhoneNumber] = useState(profileUser.data.phoneNumber);
  const [profilePicUrl, setProfilePicUrl] = useState(profileUser.data.photoUrl);
  const [profileEmail, setProfileEmail] = useState(profileUser.data.email);
  const [verified, setVerified] = useState(profileUser.data.verified);

  useEffect(() => {
    setProfilePicUrl(profileUser.data.photoUrl);
    setPhoneNumber(profileUser.data.phoneNumber);
    setProfileUsername(profileUser.data.username);
    setProfileEmail(profileUser.data.email);
    setVerified(profileUser.data.verified);
  }, [
    profileUser.data.phoneNumber,
    profileUser.data.photoUrl,
    profileUser.data.username,
    profileUser.data.verified,
  ]);

  return (
    <div>
      
      <div className="flex justify-center py-5">
        <div className=" z-10 dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary shadow-lg dark:shadow-black  w-1/2 px-6 py-2 rounded-lg">
          <div className="flex flex-col gap-px">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                Welcome, {profileUsername}
              </h1>
            </div>
            <div className="flex justify-start my-auto">
              <div className="flex flex-col items-center">
                <Avatar
                  src={profilePicUrl}
                  alt="avatar"
                  sx={{
                    width: 100,
                    height: 100,
                    boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
                  }}
                />
                <div className="mt-2">
                  <UpdatePictureButton />
                </div>
                <span className=" text-xs font-semibold">
                  ACCOUNT PREFERENCES
                </span>
              </div>
            </div>
            <div className="divide-y divide-dark-primary dark:divide-light-tertiary">
              <div></div> {/* This is a spacer */}
              <div className=" flex justify-between items-center">
                <div className="text-left dark:text-light-primary text-lg font-bold">
                  Email address{" "}
                  <p className="text-xs font-normal dark:text-dark-tertiary">
                    {profileEmail}
                  </p>
                </div>
                <UpdateEmailButton />
              </div>
            </div>
            <div className="mt-7 flex justify-between items-center">
              <div className="dark:text-light-primary text-left text-lg font-bold">
                Phone number{" "}
                <p className="text-xs font-normal dark:text-dark-tertiary">
                  {phoneNumber}
                </p>
              </div>
              <UpdatePhoneNumberButton />
            </div>
            <div className="mt-7 flex justify-between items-center">
              <div className="dark:text-light-primary text-left text-lg font-bold">
                Wallet currency{" "}
                <p className="text-xs dark:text-dark-tertiary">EUR (WIP)</p>
              </div>
              <UpdatePhoneNumberButton />
            </div>
            <span className="mt-7 text-xs text-dark-quaternary font-semibold">
              DANGER ZONE
            </span>
            <div className="divide-y divide-dark-primary dark:divide-light-tertiary">
              <div></div> {/* This is a spacer */}
              <div className=" flex justify-between items-center">
                <div className="text-left dark:text-light-primary text-lg font-bold">
                  Password <p className="text-xs">(WIP)</p>
                </div>
                <UpdateEmailButton />
              </div>
            </div>
            <div className="mt-7 flex justify-between items-center">
              <div className="text-left dark:text-light-primary text-lg font-bold">
                Delete account <p className="text-xs">(WIP)</p>
              </div>
              <UpdateEmailButton />
            </div>
            <div className="col-span-3">
              {!verified ? (
                <p className="max-w-md">
                  You have not verified your account yet! Please check your
                  inbox for the verification link sent to you after registering
                  your account.
                </p>
              ) : null}
            </div>
          </div>
          <Link to="/" className="flex justify-start mt-4">
            <span className="text-sm font-semibold">Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
