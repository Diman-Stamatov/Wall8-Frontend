import React, { useEffect, useState } from "react";
import MainHeader from "../components/MainHeader";
import UserProfile from "../components/users/UserProfile";
import { useParams } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const { profileUsername } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  
  useEffect(() => {
    getProfileData();
  }, []);

  const getProfileData = async () => {
    try {
      debugger
      const profileResponse = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/profile/${profileUsername}`,
        {
          withCredentials: true,
        }
      );
      
      setProfileUser(profileResponse);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <MainHeader />
      {<UserProfile profileUser={profileUser} />}
    </div>
  );
};

export default Profile;
