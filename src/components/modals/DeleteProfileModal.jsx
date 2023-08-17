import React, { useEffect, useState } from "react";
import axios from "axios";
import { useError } from "../../context/ErrorContext";
import { useAuth } from "../../context/AuthContext";


const DeleteProfileModal = ({
  isOpen,
  onClose
  
}) => {
  const { user, refreshUser, logoutUser } = useAuth();
  const [password, setPassword] = useState("");
  const { error, setError, clearError } = useError();
  const [textButton, setTextButton] = useState("Are you sure?");
 
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    
  };

  


  const handleSubmit = async () => {
    await axios
      .delete(
        `http://localhost:5120/api/virtual-wallet/users/delete`,
        {
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("Deleted");
        refreshUser();
        onClose();
        if(response.status == 204){
            logoutUser();
        }
      })
      .catch((reqError) => {
        console.log("ERROR req: ", reqError );
        setError({ type: "SET_ERROR", payload: reqError.response.data });
        
    });
    
  };

  useEffect(() => {}, [error]);

  return isOpen ? (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="fixed inset-0 bg-gray-900 opacity-70"></div>
      <div className="dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary shadow-lg rounded-lg p-6 w-96 z-20">
        <h2 className="text-lg font-semibold mb-4">DELETE YOUR PROFILE</h2>
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
        
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 hover:bg-green-500 rounded"
          >
            Cancel
          </button>
          <button
            onMouseEnter={() => setTextButton("DELETE")}
            onMouseOut={() => setTextButton("Are you sure?")}
            onClick={handleSubmit}
            className="px-4 py-2 bg-red-600 hover:bg-red-600 text-white rounded"
          >
            {textButton}
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default DeleteProfileModal;
