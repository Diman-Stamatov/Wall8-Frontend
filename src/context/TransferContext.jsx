import React, { createContext, useContext, useState, useReducer } from "react";
import axios from "axios";
import { transferReducer } from "../reducers/transfers/TransferReducer";
import { useLoading } from "./LoadingContext";
import { useAuth } from "./AuthContext";

const TransferContext = createContext();

export const TransferProvider = ({ children }) => {
  const { dispatch: loadingDispatch } = useLoading();
  const { refreshUser } = useAuth();

  const [state, dispatch] = useReducer(transferReducer, {
    transfers: null,
    loading: false,
    error: null,
  });

  const postTransfer = async (transferData) => {
    try {
      loadingDispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "POST_TRANSFERS_LOADING", payload: true });

      const response = await axios.post(
        "http://localhost:5120/api/virtual-wallet/transfers",
        transferData,
        {
          withCredentials: true,
        }
      );

      const transfer = response.data;
      dispatch({
        type: "POST_TRANSFERS_SUCCESS",
        payload: transfer,
      });

      loadingDispatch({ type: "SET_LOADING", payload: false });
      console.log("TRANSFER IS SET", transfer);
      refreshUser();

      return transfer;
    } catch (error) {
      dispatch({ type: "POST_TRANSFERS_ERROR", payload: error });
      console.log("Error", error);
    }
  };

  const onTransferMade = async (transferData, callback) => {
    try {
      loadingDispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "POST_TRANSFERS_LOADING", payload: true });

      const response = await axios.post(
        "http://localhost:5120/api/virtual-wallet/transfers",
        transferData,
        {
          withCredentials: true,
        }
      );

      const transfer = response.data;
      dispatch({
        type: "POST_TRANSFERS_SUCCESS",
        payload: transfer,
      });

      loadingDispatch({ type: "SET_LOADING", payload: false });
      console.log("TRANSFER IS SET", transfer);
      refreshUser();

      callback(transfer); // Call the callback with the transfer
    } catch (error) {
      dispatch({ type: "POST_TRANSFERS_ERROR", payload: error });
      console.log("Error", error);
    }
  };

  return (
    <TransferContext.Provider
      value={{ transfer: state.transfer, postTransfer, onTransferMade }}
    >
      {children}
    </TransferContext.Provider>
  );
};

export const useTransfer = () => {
  return useContext(TransferContext);
};
