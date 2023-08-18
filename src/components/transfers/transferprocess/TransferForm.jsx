import React, { useContext, useEffect, useState } from "react";
import PickRecipient from "./TransferPickRecipient";
import ChooseAmount from "./TransferChooseAmount";
import Confirm from "./TransferConfirm";
import { useNavigate } from "react-router-dom";
import TransferProgressBar from "./progressbar/TransferProgressBar";
import { useUsers } from "../../../context/UserContext";
import { useLoading } from "../../../context/LoadingContext";
import { useError } from "../../../context/ErrorContext";
import { useTransfer } from "../../../context/TransferContext";
import axios from "axios";
import { debounce } from "lodash";
import { useAuth } from "../../../context/AuthContext";
import LoadingPage from "../../../utils/LoadingPage";

const TransferForm = ({ user }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState("");
  const [complete, setComplete] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const { postTransfer, onTransferMade } = useTransfer();
  const { users, dispatch } = useUsers();
  const [recPage, setRecPage] = useState(1);
  const [pageInfo, setPageInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { loading, dispatch: loadingDispatch } = useLoading();

  const setLoadingTrue = () => {
    loadingDispatch({ type: "SET_LOADING", payload: true });
  };

  const setLoadingFalse = () => {
    loadingDispatch({ type: "SET_LOADING", payload: false });
  };

  const debouncedApiCall = debounce((searchTerm) => {
    setLoadingTrue();
    dispatch({ type: "FETCH_USERS_LOADING" });
    axios
      .get(
        `http://localhost:5120/api/virtual-wallet/users/filter?searchTerm=${searchTerm}&pageSize=5&page=${recPage}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        dispatch({
          type: "FETCH_USERS_SUCCESS",
          payload: response.data.users.items,
        });
        setPageInfo(response.data.users);
      })
      .catch((error) => {
        dispatch({ type: "FETCH_USERS_ERROR", payload: error });
        console.log("dispatched error");
        console.log("Error", error);
      })
      .finally(() => {
        setLoadingFalse();
      });
  }, 300);

  useEffect(() => {
    debouncedApiCall(searchTerm);
  }, [searchTerm, recPage]);

  const steps = ["Choose Recipient", "Choose Amount", "Review and Submit"];
  const { error, clearError } = useError();

  const recipients = users ?? [];

  const handleStepClick = () => {
    if (currentStep === steps.length) {
      setComplete(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const navigate = useNavigate();

  const wallet = user.data.wallet.balance;

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

  const handleSubmit = () => {
    const newTransfer = {
      amount: amount,
      recipientId: recipient.id,
    };

    const callback = (transfer) => {
      if (transfer) {
        navigate("/confirmed-transfer", { replace: true });
      }

      setComplete(true);
    };

    onTransferMade(newTransfer, callback);
  };

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
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
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
                onNext={handleNext}
                onNextPage={() => setRecPage((prevPage) => prevPage + 1)}
                onPrevPage={() => setRecPage((prevPage) => prevPage - 1)}
                hasNextPage={pageInfo.hasNextPage}
                hasPrevPage={pageInfo.hasPreviousPage}
              />
            )}
            {step === 2 && (
              <ChooseAmount
                amount={amount}
                wallet={wallet}
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
      )}
    </>
  );
};

export default TransferForm;
