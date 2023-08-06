import React, { useState } from "react";
import "./transferProgressBar.css";
import { TiTick } from "react-icons/ti";
import ClipLoader from "react-spinners/ClipLoader";

const TransferProgressBar = ({ currentStep, complete, steps, loading }) => {
  return (
    <>
      <div className="flex justify-between ">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {loading && complete ? (
                <ClipLoader color={"#ffffff"} loading={loading} size={24} />
              ) : (
                <>
                  {i + 1 < currentStep || complete ? (
                    <TiTick size={24} />
                  ) : (
                    i + 1
                  )}
                </>
              )}
            </div>

            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TransferProgressBar;
