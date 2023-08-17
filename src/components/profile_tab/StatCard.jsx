import React from "react";

function StatCard({ header, body, dates }) {
  return (
    <div
      style={{ width: "240px", height: "145px" }}
      className="rounded-lg  shadow-2xl shadow-light-quaternary dark:shadow-dark-secondary dark:bg-gradient-to-b dark:from-dark-secondary dark:to-dark-primary transition-transform transform hover:scale-110 hover:z-10"
    >
      <div className="border-b-2 border-success px-3 py-1 dark:text-light-primary font-semibold ">
        {header}
      </div>
      <div className="p-2">
        <h5
          className={`mb-2 text-xl font-medium leading-tight text-success ${
            header.toLowerCase().includes("sent") ? "text-red-600" : "text-green-600"
          }`}
        >
          {body}
        </h5>
      </div>
      <div className="text-sm border-t-2 border-success px-4 py-auto mt-2 dark:text-light-primary">
        {dates}
      </div>
    </div>
  );
}

export default StatCard;
