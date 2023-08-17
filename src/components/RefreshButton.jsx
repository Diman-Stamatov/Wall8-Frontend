import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";

function RefreshButton({ isLoading, fetchData }) {
  return (
    <button
      onClick={fetchData}
      disabled={isLoading}
      className={`flex items-center px-2 mb-4 ml-2 rounded-lg ${
        isLoading
          ? "dark:bg-dark-quaternary cursor-not-allowed"
          : "bg-inherit hover:bg-dark-secondary"
      } text-white text-md font-semibold transition duration-300 ease-in-out`}
    >
      {isLoading ? (
        <>
          <span className="mr-2 animate-spin">
            <FontAwesomeIcon icon={faSync} />
          </span>
          Refreshing...
        </>
      ) : (
        <>
          <span className="mr-2">
            <FontAwesomeIcon icon={faSync} />
          </span>
          Refresh Data
        </>
      )}
    </button>
  );
}

export default RefreshButton;
