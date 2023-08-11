import React, { useState } from "react";
import axios from "axios";
import CreditCardAdd from "../components/CreditCardAdd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function getCardType(cardNumber) {
  const cardTypes = [
    { type: 'VISA', pattern: /^4/ },
    { type: 'MASTERCARD', pattern: /^5[1-5]/ },
    { type: 'AMEX', pattern: /^3[47]/ },
    { type: 'DISCOVER', pattern: /^6(?:011|5)/ },
    { type: 'JCB', pattern: /^35/ },
    { type: 'DINERS_CLUB', pattern: /^3(?:0[0-5]|[68])/ },
    { type: 'UNIONPAY', pattern: /^(62|88)/ },
    { type: 'LASER', pattern: /^(6304|670[69]|6771)/ },
    { type: 'MAESTRO', pattern: /^(5018|5020|5038|6304|6759|676[1-3])/ },
    { type: 'MIR', pattern: /^(220[0-4])/ },
    { type: 'NPS_PAGUE', pattern: /^(60416)/ },
    { type: 'OCA', pattern: /^(5[0-9]{3})/ },
    { type: 'UATP', pattern: /^(1)/ },
    { type: 'VERVE', pattern: /^(506[0-1]|650[0-4])/ },
    { type: 'CHINA_UNION_PAY', pattern: /^(62)/ },
    { type: 'DANKORT', pattern: /^(5019)/ },
    { type: 'UATP', pattern: /^(1)/ },
    { type: 'RUPAY', pattern: /^(6[0-9]{3})/ },
    { type: 'TROY', pattern: /^(9[0-9]{3})/ },
  ];

  const matchedType = cardTypes.find(cardType => cardType.pattern.test(cardNumber));

  return matchedType ? matchedType.type : 'UNKNOWN';
}

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
        expirationDate:cardValues.expiry/*cardValues.expiry*/,
        securityCode:cardValues.cvc,
        type:getCardType(cardValues.number)
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
