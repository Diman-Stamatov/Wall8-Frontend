import React, { createContext, useContext, useReducer } from "react";

const ErrorContext = createContext();

const initialState = null;

const errorReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return action.payload;
    case "CLEAR_ERROR":
      return null;
    default:
      return state;
  }
};

export const ErrorProvider = ({ children }) => {
  const [error, dispatch] = useReducer(errorReducer, initialState);

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError: dispatch,
        clearError: () => dispatch({ type: "CLEAR_ERROR" }),
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export function useError() {
  return useContext(ErrorContext);
}
