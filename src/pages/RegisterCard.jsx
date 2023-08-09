import React, { useState } from "react";
import axios from "axios";
import CreditCardAdd from "../components/CreditCardAdd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function RegisterCard() {
    const navigate = useNavigate();
    const { refreshUser } = useAuth();

    function initBack() {
        navigate("/");
      }

  const [cardValues, setCardValues] = useState([]);
  const handleSubmit = async (cardValues) => {
    const response = await axios
      .post("http://localhost:5120/api/virtual-wallet/cards", {
        name:cardValues.name,
        number:cardValues.number,
        expirationDate:"2023-08-08T17:38:46.350Z"/*cardValues.expiry*/,
        securityCode:cardValues.cvc,
        type:"Credit",
        brand:"Whatever"
      }, {
        withCredentials: true,
      })
      .then((response) => {
        console.log("Registered card: ", response);
        refreshUser();
      })
      .catch((error) => {
        console.log("CARD REGISTER ERROR: ", error);
      });
      initBack();
  };
  
  return <CreditCardAdd handleSubmitRequest={handleSubmit} setCardValues={setCardValues} />;
}

export default RegisterCard;
