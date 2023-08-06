import React, { createContext, useContext, useState } from "react";

const TransferContext = createContext();

export const TransferProvider = ({ children }) => {
  const [transfers, setTransfers] = useState([]);

  const addTransfer = (transferData) => {
    setTransfers([...transfers, transferData]);
  };

  return (
    <TransferContext.Provider value={{ transfers, addTransfer }}>
      {children}
    </TransferContext.Provider>
  );
};

export const useTransfer = () => {
  return useContext(TransferContext);
};
