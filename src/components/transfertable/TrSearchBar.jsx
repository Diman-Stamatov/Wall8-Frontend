import React from "react";

const TrSearchBar = ({
  filterText,
  incomingOnly,
  outgoingOnly,
  onFilterTextChange,
  onIncomingOnlyChange,
  onOutgoingOnlyChange,
}) => {
  return (
    <form className="container max-h-screen mx-auto p-6 bg-transparent outline-none outline-zinc-700 rounded-xl shadow-md space-y-4">
      <div className="flex flex-row justify-start max-w-md">
        <input
          className="w-full px-4 py-2 bg-transparent outline-none outline-zinc-700 rounded-xl shadow-md"
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-start max-w-md">
        <label>
          <input
            type="checkbox"
            checked={incomingOnly}
            onChange={(e) => onIncomingOnlyChange(e.target.checked)}
          />
          <span className="ml-2">Only show incoming transactions</span>
        </label>
        <label>
          <input
            type="checkbox"
            checked={outgoingOnly}
            onChange={(e) => onOutgoingOnlyChange(e.target.checked)}
          />
          <span className="ml-2">Only show outgoing transactions</span>
        </label>
      </div>
    </form>
  );
};

export default TrSearchBar;
