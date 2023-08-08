import React, { useState, useEffect } from "react";
import MainHeader from "../components/MainHeader";
import { useAuth } from "../context/AuthContext";
import UpdateEmailButton from "../components/UpdateEmailButton";
import UpdatePhoneNumberButton from "../components/UpdatePhoneNumberButton";
import UpdatePictureButton from "../components/UpdatePictureButton";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const profilePic = user.data.photoUrl ?? "https://i.imgur.com/R7vnue3.jpeg";
  const verified = user.data.isVerified;
  const [phoneNumber, setPhoneNumber] = useState(user.data.phoneNumber);

  return (
    <div className="bg-dark-tertiary dark:bg-dark-primary bg-cover bg-center bg-no-repeat h-full w-full absolute top-0 left-0 z-0">
      <MainHeader username={username} setUsername={setUsername} />
      <div style={{ marginTop: 50 }} className="flex justify-center ">
        <div
          style={{ fontSize: 20, textAlign: "center" }}
          className="  border border-dark-primary dark:border-light-tertiary z-10 bg-light-primary dark:bg-dark-primary w-55 px-6 py-2 rounded-md "
        >
          <table className="table-auto border-separate border-spacing-2 ">
            <tbody>
              <tr>
                <td style={{ fontSize: 40 }} colSpan={3}>
                  Welcome, {user ? user.data.username : "Guest"}.
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <img
                    style={{
                      height: 160,
                      width: 160,
                      display: "block",
                      margin: "auto",
                    }}
                    src={profilePic}
                    alt="ProfilePic"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan={3}>
                  <UpdatePictureButton />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", paddingLeft: 20 }}>E-mail:</td>
                <td>{user.data.email}</td>
                <td>
                  <UpdateEmailButton />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", paddingLeft: 20 }}>
                  Phone number:
                </td>
                <td>{phoneNumber}</td>
                <td>
                  <UpdatePhoneNumberButton />
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: 40 }} className="max-w-md" colSpan={3}>
                  {!verified
                    ? "You have not verified your account yet! Please check your inbox for the verification link sent to you after registering your account."
                    : ""}
                </td>
              </tr>
            </tbody>
          </table>
          <Link to="/" className="flex justify-center ">
            <button className="button  dark:bg-dark-secondary dark:hover:bg-dark-tertiary text-white font-bold  px-4 rounded">
              <span className="font-roboto text-l">Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
