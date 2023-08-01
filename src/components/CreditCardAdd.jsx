import React, { useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

function CreditCardAdd() {
  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    focus: "",
  });

  const handleInputChange = async (e) => {
    const { name, value } = e.target;

    if (name == "cvc" && value.length > 3) return;

    if (name === "expiry" && value.length === 2 && !value.includes("/")) {
      setCard((prevState) => ({ ...prevState, [name]: value + "/" }));
      return;
    }
    if (name === "expiry" && value.length > 5) return;

    setCard((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleInputFocus = async (e) => {
    setCard((prevState) => ({ ...prevState, focused: e.target.name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(card);
  };

  return (
    <div className="card-container">
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
            pattern="[\d| ]{16,22}"
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
            placeholder="CVC"
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
      </form>
    </div>
  );
}

export default CreditCardAdd;
