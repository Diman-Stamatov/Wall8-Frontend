import React from "react";
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs";
import AddFundsModal from "./modals/AddFundsModal";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function AddFundsButton() {
  const { setBalance } = useContext(AuthContext);
  const [showAddFundsModal, setShowAddFundsModal] = useState(false);

  const addToBalance = (amount) => {
    setBalance((prevBalance) => prevBalance + Number(amount));
  };

  return (
    <div className="container max-h-screen mx-auto  p-6 pt-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <button
            onClick={() => setShowAddFundsModal(true)}
            className="p-5 m-2 bg-transparent text-green-500 rounded-lg flex flex-col items-center"
          >
            <BsPatchPlus className="text-6xl" />
            <span className="font-roboto text-l">Deposit Funds</span>
          </button>
          {showAddFundsModal && (
            <AddFundsModal
              showModal={showAddFundsModal}
              setShowModal={setShowAddFundsModal}
              addToBalance={addToBalance}
            />
          )}
          <button className="p-5 m-2 bg-transparent text-red-500 rounded-lg flex flex-col items-center">
            <BsPatchMinus className="text-6xl" />
            <span className="font-roboto text-l">Withdraw Funds</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFundsButton;
