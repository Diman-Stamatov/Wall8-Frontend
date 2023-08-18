import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { useNavigate } from "react-router";

function CreditCardAdd({ handleSubmitRequest, setCardValues }) {
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focused: "",
  });
  const navigate = useNavigate();

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    if (name == "cvc" && value.length > 3) return;

    if (name === "expiry" && value.length === 2 && !value.includes("/")) {
      setCard((prevState) => ({ ...prevState, [name]: value + "/" }));
      return;
    }
    if (name === "expiry" && value.length > 5) return;

    setCard((prevState) => ({ ...prevState, [name]: value }));
    if (
      name === "number" &&
      value.replace(/\s/g, "").length % 4 === 0 &&
      value.replace(/\s/g, "").length != 16 &&
      value.replace(/\s/g, "").length != 0
    ) {
      setCard((prevState) => ({ ...prevState, [name]: value + " " }));
    }
  };

  const handleInputFocus = async (e) => {
    setCard((prevState) => ({ ...prevState, focused: e.target.name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("JUST BEFORE SETTING ");
    // setCardValues(card);
    card.number = card.number.replace(/\s/g, "");
    console.log("SET CARD ", card);
    handleSubmitRequest(card);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b dark:from-dark-primary dark:to-light-quaternary from-light-primary to-light-quaternary">
      <Cards
        number={card.number}
        name={card.name}
        expiry={card.expiry}
        cvc={card.cvc}
        focused={card.focused}
      />
      <form onSubmit={handleSubmit} className="card-form">
        <div className="form-group">
          <input
            type="tel"
            name="number"
            className="form-control"
            placeholder="Card Number"
            pattern="\d{4} \d{4} \d{4} \d{4}"
            value={card.number}
            required
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            required
            value={card.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="expiry"
            className="form-control"
            placeholder="Valid Thru"
            pattern="\d\d/\d\d"
            required
            value={card.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="cvc"
            className="form-control"
            placeholder="cvc"
            pattern="\d{3,4}"
            required
            value={card.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="card-btn">
            Add Card
          </button>
        </div>
        <p onClick={() => navigate("/")} className="text-dark-primary dark:text-light-primary text-lg cursor-pointer tom-0 right-0">Home</p>
      </form>
    </div>
  );
}

export default CreditCardAdd;
