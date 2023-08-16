import React from "react";

function StatCard() {
  return (
    <div
      style={{ width: "240px", height: "145px" }}
      class="rounded-lg dark:bg-gradient-to-b dark:from-dark-primary dark:to-light-primary "
    >
      <div class="border-b-2 border-success px-3 py-1 dark:text-light-tertiary font-semibold ">
        Income
      </div>
      <div class="p-2">
        <h5 class="mb-2 text-xl font-medium leading-tight text-success dark:text-dark-primary">
          $49394
        </h5>
        <p class="text-base ">+ $345 from last week</p>
      </div>
      <div class="text-sm border-t-2 border-success px-4 py-auto mt-2 dark:text-dark-secondary">
        9 - 16 August
      </div>
    </div>
  );
}

export default StatCard;
