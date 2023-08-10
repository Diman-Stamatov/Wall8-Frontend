import React from "react";
import AddCardButton from "./AddCardButton";
import { Button } from "@material-tailwind/react";
function CardTab({ cards }) {
  return (
    <div className="flex flex-row flex-wrap gap-6 pl-2">
      {cards.map((card, index) => {
        const { cardHolderName, cardNumber, expirationDate, type, brand } =
          card;
        return (
          <div
            key={cardNumber}
            className="w-96 h-56 rounded-xl relative dark:text-light-primary shadow-xl dark:shadow-dark-primary transition-transform transform hover:scale-110 hover:z-10"
          >
            <img
              className="relative object-cover w-full h-full rounded-xl"
              src="https://i.imgur.com/kGkSg1v.png"
            />
            <div className="w-full px-8 absolute top-8">
              <div className="flex justify-between">
                <div className="">
                  <p className="font-light">Name</p>
                  <p className="font-medium tracking-widest">
                    {cardHolderName}
                  </p>
                </div>
                <img
                  className="w-14 h-14"
                  src="https://i.imgur.com/bbPHJVe.png"
                />
              </div>
              <div className="pt-1">
                <p className="font-light">Card Number</p>
                <p className="font-medium tracking-more-wider">{cardNumber}</p>
              </div>
              <div className="pt-6 pr-6">
                <div className="flex justify-between">
                  <div className="">
                    <p className="font-light  text-xs">Expiry</p>
                    <p className="font-medium tracking-wider text-sm">
                      {expirationDate}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="font-light text-xs ">CVV</p>
                    <p className="font-bold tracking-more-wider text-sm">···</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="w-96 h-56 flex justify-center items-center">
        <AddCardButton />
      </div>
      ;
    </div>
  );
}
export default CardTab;
