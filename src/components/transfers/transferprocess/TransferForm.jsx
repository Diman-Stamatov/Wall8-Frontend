import React, { useEffect, useState } from "react";
import PickRecipient from "./TransferPickRecipient";
import ChooseAmount from "./TransferChooseAmount";
import Confirm from "./TransferConfirm";
import { useNavigate } from "react-router-dom";
import TransferProgressBar from "./progressbar/TransferProgressBar";
import { useUsers } from "../../../context/UserContext";
import { useLoading } from "../../../context/LoadingContext";
import { useError } from "../../../context/ErrorContext";
import { useTransfer } from "../../../context/TransferContext";

const TransferForm = ({ user }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [filterText, onFilterTextChange] = useState("");
  const [complete, setComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { postTransfer } = useTransfer();

  const steps = ["Choose Recipient", "Choose Amount", "Review and Submit"];

  const { state } = useUsers();
  const { loading } = useLoading();
  const { error, clearError } = useError();

  const recipients = state.users;

  const handleStepClick = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const navigate = useNavigate();

  const balance = user.data.balance;

  const handleNext = () => {
    setStep(step + 1);
    handleStepClick();
  };

  const handlePrevious = () => {
    if (complete || loading) {
      setComplete(false);
    }

    setStep(step - 1);
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const newTransfer = {
      amount: amount,
      recipientId: recipient.id,
    };

    await postTransfer(newTransfer);

    setComplete(true);
    navigate("/confirmed-transfer", { replace: true });
  };

  return (
    <>
      <TransferProgressBar
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
        complete={complete}
        setComplete={setComplete}
        steps={steps}
        loading={loading}
      />
      <div className="flex justify-center mx-auto p-4">
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
            isLoading={loading}
            setStep={setStep}
            recipient={recipient.username}
            amount={amount}
            onPrevious={handlePrevious}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </>
  );
};

export default TransferForm;
