import React, { createContext, useContext, useState, useReducer } from "react";
import axios from "axios";
import { transferReducer } from "../reducers/transfers/TransferReducer";
import { useLoading } from "./LoadingContext";

const TransferContext = createContext();

export const TransferProvider = ({ children }) => {
  const { dispatch: loadingDispatch } = useLoading();

  const [state, dispatch] = useReducer(transferReducer, {
    transfers: [],
    loading: false,
    error: null,
  });

  const postTransfer = async (transferData) => {
    loadingDispatch({ type: "SET_LOADING", payload: true });
    dispatch({ type: "POST_TRANSFERS_LOADING", payload: true });
    console.log("dispatched loading", loadingDispatch);
    console.log("dispatched loading", dispatch);

    axios
      .post(
        "http://localhost:5120/api/virtual-wallet/transfers",
        transferData,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        const transfer = response.data;
        dispatch({
          type: "POST_TRANSFERS_SUCCESS",
          payload: [...state.transfers, transfer],
        });
        loadingDispatch({ type: "SET_LOADING", payload: false });
        console.log("dispatched success");
        console.log("Transfer", transfer);
      })
      .catch((error) => {
        dispatch({ type: "POST_TRANSFERS_ERROR", payload: error });
        console.log("dispatched error");
        console.log("Error", error);
      });
  };

  return (
    <TransferContext.Provider
      value={{ transfers: state.transfers, postTransfer }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export const useTransfer = () => {
  return useContext(TransferContext);
};
