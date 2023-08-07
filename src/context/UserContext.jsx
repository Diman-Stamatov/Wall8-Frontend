import React, { createContext, useContext, useEffect, useReducer } from "react";
import { userReducer } from "../reducers/users/UserReducer";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, {
    users: [],
    loading: false,
    error: null,
  });

  return (
    <UserContext.Provider value={{ users: state.users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUsers() {
  return useContext(UserContext);
}
