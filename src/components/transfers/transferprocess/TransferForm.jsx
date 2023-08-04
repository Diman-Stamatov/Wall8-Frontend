import React, { useState } from "react";
import PickRecipient from "./TransferPickRecipient";
import ChooseAmount from "./TransferChooseAmount";
import Confirm from "./TransferConfirm";
import { useNavigate } from "react-router-dom";

const TransferForm = ({ user }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [filterText, onFilterTextChange] = useState("");
  const recipients = [
    { id: "1", username: "tusanko", email: "test@email", phone: "incoming" },
    { id: "2", username: "petar", email: "test2@email", phone: "incoming" },
    { id: "3", username: "diman4o", email: "test3@email", phone: "outgoing" },
    { id: "4", username: "k0seb0s3", email: "test4@email", phone: "outgoing" },
    { id: "5", username: "Rado", email: "test5@email", phone: "outgoing" },
  ];

  const navigate = useNavigate();

  const balance = 1000;

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Posting to API, recipient with Id:", recipient.id);
    console.log("Transfer submitted:", recipient, amount);
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && (
        <PickRecipient
          recipient={recipient}
          setRecipient={setRecipient}
          recipients={recipients}
          filterText={filterText}
          onFilterTextChange={onFilterTextChange}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <ChooseAmount
          amount={amount}
          balance={balance}
          setAmount={setAmount}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <Confirm
          recipient={recipient.username}
          amount={amount}
          onPrevious={handlePrevious}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default TransferForm;
