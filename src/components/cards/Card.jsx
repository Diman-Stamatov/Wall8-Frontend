import React from "react";
import WalletBalance from "../WalletBalance";
import AuthContext from "../../context/AuthContext";
import { ConfirmDialog } from "../dialogs/ConfirmDialog";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CardTab({ cards }) {
  return (
    <div className="grid grid-cols-3">
      {cards.map((card, index) => {
        const { cardHolderName, cardNumber, expirationDate, type, brand } = card;
        return (
          <div className="max-w-xs mx-auto dark:bg-dark-primary rounded-lg outline dark:outline-dark-secondary shadow-md overflow-hidden mt-24" key={cardNumber}>
            <div className="dark:bg-dark-secondary px-4 py-2">
              <h2 className="text-lg font-medium text-center dark:text-light-primary">
                {type} Card
              </h2>
            </div>
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col align-items-center items-center justify-between mb-6">
                <span className="text-sm font-medium dark:text-light-primary">
                  Cardholder Name
                </span>
                <span className="text-lg font-medium dark:text-light-primary">
                  {cardHolderName}
                </span>
              </div>
              <div className="flex  flex-col align-align-items-lg-center items-center justify-between mb-6">
                <span className="text-sm font-medium dark:text-light-primary">
                  Card Number
                </span>
                <span className="text-lg font-medium dark:text-light-primary">
                  {cardNumber}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between mb-6">
                <div className="flex flex-col  text-center">
                  <span className="text-sm font-medium dark:text-light-primary">
                    Expiration Date
                  </span>
                  <span className="text-lg font-medium dark:text-light-primary">
                    {expirationDate}
                  </span>
                </div>
                <div className="flex flex-col text-center">
                  <span className="text-sm font-medium dark:text-light-primary">
                    Brand
                  </span>
                  <span className="text-lg font-medium dark:text-light-primary">
                    {brand}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}
export default CardTab;
