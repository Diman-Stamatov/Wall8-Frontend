import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import LoadingPage from "../utils/LoadingPage";
import { useLoading } from "./LoadingContext";
import { useError } from "./ErrorContext";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [balance, setBalance] = useState(0);
  const [mainState, setMainState] = useState(null);
  const { setError } = useError();

  const handleUserUpdate = (update) => {
    setMainState(update);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getUserOnLoad();
  }, []);

  const getUserOnLoad = async () => {
    try {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("Cookie_JWT"));

      if (cookie === undefined) {
        setLoading(false);
        return;
      }

      const token = cookie.split("=")[1];

      const decoded = jwt_decode(token);

      const userId = decoded.sub;

      const profile = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/${userId}/profile`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(profile);
    } catch (error) {}
    setLoading(false);
  };

  const loginUser = async (userInfo) => {
    try {
      const response = await axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/login",
        {
          email: userInfo.email,
          password: userInfo.password,
        }
      );

      document.cookie = `Cookie_JWT=${response.data.data.token}`;

      const id = response.data.data.id;

      const profileResponse = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/${id}/profile`,
        {
          withCredentials: true,
        }
      );
      setUser(profileResponse);
      navigate("/");
    } catch (error) {
      setError({ type: "SET_ERROR", payload: error.response.data });
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post(
        "http://localhost:5120/api/virtual-wallet/auth/logout",
        {},
        { withCredentials: true }
      );
      setUser(null);
      document.cookie = "Cookie_JWT=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
      navigate("/");
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  const refreshUser = useCallback(async () => {
    try {
      const cookie = document.cookie
        .split("; ")
        .find((row) => row.startsWith("Cookie_JWT"));

      if (cookie === undefined) {
        setLoading(false);
        return;
      }

      const token = cookie.split("=")[1];

      const decoded = jwt_decode(token);

      const userId = decoded.sub;

      const profile = await axios.get(
        `http://localhost:5120/api/virtual-wallet/users/${userId}/profile`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUser(profile);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const contextData = {
    balance,
    user,
    loginUser,
    logoutUser,
    setBalance,
    refreshUser,
    handleUserUpdate,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <LoadingPage /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
