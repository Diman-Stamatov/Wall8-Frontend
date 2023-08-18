import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useError } from "../../context/ErrorContext";
import { number } from "yup";

function SubFundsModal({ balance, isOpen, onClose, handleSuccess }) {
  const [amount, setAmount] = useState(0);
  const { user, refreshUser } = useAuth();
  const { error, setError, clearError } = useError();
  const userId = user.data.id;

  const handleConfirm = async () => {
    const finalAmount = Number(balance) - Number(amount);
    
    if (Number(finalAmount) > 0) {
      await axios
        .put(
          `http://localhost:5120/api/virtual-wallet/users/${userId}/wallets/balance`,
          {
            userId: userId,
            balance: finalAmount,
          },
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          handleSuccess(response.data);
          refreshUser();
          onClose();
        })
        .catch((reqError) => {
          setError({ type: "SET_ERROR", payload: reqError.response.data });
        });
    } else {
      onClose();
    }
  };

  return isOpen ? (
    <div className="modal">
      <div className="backdrop" onClick={onClose}>
        <div
          className="modal-content p-6  outline-none outline-zinc-700 rounded-xl shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-zinc-500 font-bold text-lg font-roboto mb-4">
            Withdraw Funds
          </h2>
          <input
            type="number"
            className="p-2 border border-gray-300 rounded-lg w-full mb-4 text-gray-500 text-xl font-roboto"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button
            onClick={handleConfirm}
            className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default SubFundsModal;
