import React, { useEffect, useState } from "react";

function TablePagination({
  transfers,
  currentPage,
  transfersPerPage,
  setCurrentPage,
}) {
  const transferCount = transfers.length;
  const pages = Math.ceil(transferCount / transfersPerPage);

  const hasNextPage = currentPage < pages;

  const hasPrevPage = currentPage > 1;

  const handlePrevClick = () => {
    if (hasPrevPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (hasNextPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const startIndex = (currentPage - 1) * transfersPerPage;
  const endIndex = Math.min(startIndex + transfersPerPage, transferCount);

  return (
    <div className="px-5 py-5 dark:bg-dark-secondary border-2 border-light-quaternary  dark:border-dark-tertiary flex flex-col xs:flex-row items-center xs:justify-between rounded-b-lg         ">
      <span className="text-xs xs:text-sm dark:text-light-secondary">
        Showing {startIndex + 1} to {endIndex} of {transferCount} entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0 shadow-md shadow-light-quaternary dark:shadow-dark-primary">
        <div className="divide-x-2">
          <button
            disabled={!hasPrevPage}
            onClick={handlePrevClick}
            className="text-sm bg-gray-300 hover:bg-gray-400 dark:text-dark-tertiary font-semibold py-2 px-4 rounded-l"
          >
            Prev
          </button>
          <button
            disabled={!hasNextPage}
            onClick={handleNextClick}
            className="text-sm bg-gray-300 hover:bg-gray-400 dark:text-dark-tertiary font-semibold py-2 px-4 rounded-r"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TablePagination;
