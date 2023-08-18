import React, { useEffect, useState } from "react";
import axios from "axios";
import { useError } from "../../context/ErrorContext";
import { useAuth } from "../../context/AuthContext";

const ISO_CODES = [
  "USD",
  "EUR",
  "BGN",
  "GBP",
  "JPY",
  "CAD",
  "AUD",
  "CHF",
  "CNY",
  "INR",
  "BRL",
  "RUB",
  "ZAR",
  "SGD",
  "NZD",
  "MXM",
];

const ChangeCurrencyModal = ({
  isOpen,
  onClose,
  onComplete,
  handleSuccess,
}) => {
  const { user, refreshUser } = useAuth();
  const userId = user.data.id;
  const [password, setPassword] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(ISO_CODES[0]);
  const { error, setError, clearError } = useError();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    clearError();
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleSubmit = async () => {
    await axios
      .put(
        `http://localhost:5120/api/virtual-wallet/users/${userId}/wallets/change-currency`,
        {
          userId: userId,
          password: password,
          newCurr: selectedCurrency,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        handleSuccess(response.data);
        onComplete(response.data);
        refreshUser();
        onClose();
      })
      .catch((reqError) => {
        setError({ type: "SET_ERROR", payload: reqError.response.data });
      });
  };

  useEffect(() => {}, [error]);

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 bg-gray-900 opacity-70"></div>
      <div className="dark:bg-gradient-to-t  bg-light-tertiary dark:from-dark-primary dark:to-light-quaternary shadow-lg rounded-lg p-6 w-96 z-20">
        <h2 className="text-lg font-semibold mb-4 ">Change currency</h2>
        <div className="mb-4">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter your password.."
            onChange={handlePasswordChange}
            className="border rounded w-full py-1 px-2"
          />
          {error && (
            <p className="text-dark-quaternary text-sm">{error.detail}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="currency" className="block font-medium mb-1">
            Currency
          </label>
          <select
            id="currency"
            value={selectedCurrency}
            onChange={handleCurrencyChange}
            className="border rounded w-full py-1 px-2"
          >
            {ISO_CODES.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 hover:bg-gray-500 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChangeCurrencyModal;
