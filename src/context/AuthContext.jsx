import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("Cookie_JWT"));

      const token = cookie.split("=")[1];

      const decoded = jwt_decode(token);

      const userId = decoded.sub;
      console.log("userId", userId);

      let accountDetails = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/${userId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const profile = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/${userId}/profile`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("profile", profile);

      accountDetails["profile"] = profile;
      setUser(profile);
      console.log(accountDetails);
      navigate("/main");
      console.log("navigated to main");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const loginUser = async (userInfo) => {
    try {
      console.log("login initiated");
      const response = await axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/login",
        {
          email: userInfo.email,
          password: userInfo.password,
        }
      );
      console.log("login response: ", response);

      document.cookie = `Cookie_JWT=${response.data.data.token}`;
      console.log("cookie", document.cookie);
      let id = response.data.data.id;
      const accountDetails = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/${id}/profile`,
        { withCredentials: true }
      );

      setUser(accountDetails);
      navigate("/main");
    } catch (error) {
      console.log("login error: ", error);
    }
  };

  const logoutUser = async () => {
    console.log("logout");
    try {
      await axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      document.cookie = "Cookie_JWT=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const contextData = {
    balance,
    user,
    loginUser,
    logoutUser,
    setBalance,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <h1>Loading...</h1> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
