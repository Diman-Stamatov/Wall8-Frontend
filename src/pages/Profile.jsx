import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import UserProfile from "../components/users/UserProfile";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { profileUsername } = useParams();
  const [profileUser, setProfileUser] = useState({ data: {} });
  const [mainState, setMainState] = useState(null);
  const handlePostComplete = (result) => {
    setMainState(result);
  };

  const getProfileData = async () => {
    try {
      const profileResponse = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/profile/${profileUsername}`,
        {
          withCredentials: true,
        }
      );
      setProfileUser(profileResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProfileData();
  }, [profileUsername, mainState]);

  return (
    <div>
      <MainHeader />
      <UserProfile
        profileUser={profileUser}
        onPostComplete={handlePostComplete}
      />
    </div>
  );
};

export default Profile;
