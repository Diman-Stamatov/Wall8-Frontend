import React, { useState, useEffect } from "react";
import UpdateEmailButton from "../../components/UpdateEmailButton";
import UpdatePasswordButton from "../UpdatePasswordButton";
import UpdatePhoneNumberButton from "../../components/UpdatePhoneNumberButton";
import UpdatePictureButton from "../../components/UpdatePictureButton";
import BlockButton from "../BlockButton";
import UnblockButton from "../UnblockButton";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { useAuth } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";
import ChangeCurrencyModal from "../modals/ChangeCurrencyModal";
import SuccessModal from "../modals/SuccessModal";
import { useUserLocale } from "../../context/LocaleContext";
import DeleteProfileModal from "../modals/DeleteProfileModal";

const UserProfile = ({ profileUser, onPostComplete }) => {
  const {userLocale} = useUserLocale();
  const { user } = useAuth();
  const {
    wallet,
    photoUrl,
    phoneNumber,
    username,
    email,
    isVerified,
    isBlocked,
  } = profileUser;
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { clearError } = useError();
  const [successData, setSuccessData] = useState(null);

  const ownProfile = profileUser.username === user.data.username;
  const loggedAdmin = user.data.isAdmin;
  const handleSuccess = (data) => {
    setSuccessData(data);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    clearError();
  };
  const openDeleteModal = () => {
    setIsDeleteOpen(true);
    
  };
  const closeDeleteModal = () => {
    setIsDeleteOpen(false);
    clearError();
  };

  return (
    <div>
      <div className="flex justify-center py-5">
        <div
          className={`z-10 dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary shadow-lg dark:shadow-black ${
            ownProfile ? "w-1/2" : "w-1/6"
          } px-6 py-2 rounded-lg`}
        >
          <div className="flex flex-col gap-px">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                {ownProfile ? `Welcome, ${username}` : `${username}'s profile`}
              </h1>
            </div>
            <div
              className={`flex ${
                ownProfile ? "justify-start" : "justify-center"
              } my-auto`}
            >
              <div className="flex flex-col items-center">
                <Avatar
                  src={photoUrl}
                  alt="avatar"
                  sx={{
                    width: 100,
                    height: 100,
                    boxShadow: "0px 3px 5px 2px rgba(0, 0, 0, 0.3)",
                  }}
                />
                {ownProfile ? (
                  <UpdatePictureButton onPostComplete={onPostComplete} />
                ) : (
                  ""
                )}
                <div className="mt-3 mb-3">
                  {!ownProfile && loggedAdmin ? (
                    <>
                      {isBlocked ? (
                        <UnblockButton
                          profileUser={profileUser}
                          onPostComplete={onPostComplete}
                        />
                      ) : (
                        <BlockButton
                          profileUser={profileUser}
                          onPostComplete={onPostComplete}
                        />
                      )}
                    </>
                  ) : (
                    ""
                  )}
                </div>
                {isBlocked?
                  <div style={{color:"red", textAlign:"justify"}}>
                  {ownProfile? "Your" : `${username}'s`} account has been blocked and can therefore not send or receive any transfers.
                  {ownProfile? " Please contact our support team for any further questions regarding this issue." : ""}
                  </div>
                  :""
                }                
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
                    {email}
                  </p>
                </div>
                {ownProfile ? (
                  <UpdateEmailButton onPostComplete={onPostComplete} />
                ) : null}
              </div>
            </div>
            <div className="mt-7 flex justify-between items-center">
              <div className="dark:text-light-primary text-left text-lg font-bold">
                Phone number{" "}
                <p className="text-xs font-normal dark:text-dark-tertiary">
                  {phoneNumber}
                </p>
              </div>
              {ownProfile ? (
                <UpdatePhoneNumberButton onPostComplete={onPostComplete} />
              ) : null}
            </div>
            <div className="mt-7 flex justify-between items-center">
              <div className="dark:text-light-primary text-left text-lg font-bold">
                Wallet currency{" "}
                <p className="text-xs dark:text-dark-tertiary">
                  {wallet.balance.currency}
                </p>
              </div>
              {ownProfile && (
                <>
                  <button
                    onClick={openModal}
                    className="button rounded-full  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 "
                  >
                    <span className="text-sm">Change Currency</span>
                  </button>
                  <ChangeCurrencyModal
                    isOpen={isOpen}
                    onClose={closeModal}
                    onComplete={onPostComplete}
                    handleSuccess={handleSuccess}
                  />
                  <SuccessModal
                    isOpen={successData !== null}
                    onClose={() => setSuccessData(null)}
                    successData={successData}
                    locale={userLocale}
                  />
                </>
              )}
            </div>
            {ownProfile ? (
              <div>
                <span className="mt-7 text-xs text-dark-quaternary font-semibold">
                  DANGER ZONE
                </span>
                <div className="divide-y divide-dark-primary dark:divide-light-tertiary">
                  <div></div> {/* This is a spacer */}
                  <div className=" flex justify-between items-center">
                    <div className="text-left dark:text-light-primary text-lg font-bold">
                      Password <p className="text-xs">(WIP)</p>
                    </div>
                    <UpdatePasswordButton />
                  </div>
                </div>
                <div className="mt-7 flex justify-between items-center">
                  <div className="text-left dark:text-light-primary text-lg font-bold">
                    Delete account 
                  </div>
                  <button
                    onClick={openDeleteModal}
                    className="button rounded-full  bg-red-600  text-white font-bold  px-4 "
                  >
                    <span className="text-sm">Delete</span>
                  </button>
                  <DeleteProfileModal 
                    isOpen={isDeleteOpen}
                    onClose={closeDeleteModal}
                  />
                </div>
                <div className="col-span-3">
                  {!isVerified ? (
                    <p className="max-w-md">
                      You have not verified your account yet! Please check your
                      inbox for the verification link sent to you after
                      registering your account.
                    </p>
                  ) : null}
                </div>
              </div>
            ) : null}
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
