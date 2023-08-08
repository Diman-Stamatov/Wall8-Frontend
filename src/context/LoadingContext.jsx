import React, { createContext, useContext, useState, useReducer } from "react";

const LoadingContext = createContext();

const initialState = false;

const loadingReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return action.payload;
    default:
      return state;
  }
};

export const LoadingProvider = ({ children }) => {
  const [loading, dispatch] = useReducer(loadingReducer, initialState);
  

  return (
    <LoadingContext.Provider value={{ loading, dispatch }}>
      {children}
    </LoadingContext.Provider>
  );
};

export function useLoading() {
  return useContext(LoadingContext);
}
