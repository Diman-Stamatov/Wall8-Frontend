import React from "react";

function StatCard() {
  return (
    <div
      style={{ width: "240px", height: "145px" }}
      className="rounded-lg  shadow-2xl shadow-light-quaternary dark:shadow-dark-secondary dark:bg-gradient-to-b dark:from-dark-secondary dark:to-dark-primary transition-transform transform hover:scale-110 hover:z-10"
    >
      <div className="border-b-2 border-success px-3 py-1 dark:text-light-primary font-semibold ">
        Income
      </div>
      <div className="p-2">
        <h5 className="mb-2 text-xl font-medium leading-tight text-success dark:text-light-primary">
          $49394
        </h5>
        <p className="text-base dark:text-light-primary">+ $345 from last week</p>
      </div>
      <div className="text-sm border-t-2 border-success px-4 py-auto mt-2 dark:text-light-primary">
        9 - 16 August
      </div>
    </div>
  );
}

export default StatCard;
