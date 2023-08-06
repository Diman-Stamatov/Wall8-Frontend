import React, { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducers/users/UserReducer";
import axios from "axios";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    dispatch({ type: "FETCH_USERS_LOADING" });
    console.log("dispatched loading");
    axios
      .get("http://localhost:5120/api/virtual-wallet/users/filter?pageSize=5", {
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: response.data.users.items,
        });
        console.log("dispatched success");
        console.log("Users", response.data.users.items);
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USERS_ERROR", payload: error });
        console.log("dispatched error");
        console.log("Error", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}
