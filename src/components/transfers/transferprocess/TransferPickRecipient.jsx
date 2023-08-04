import ExpandedRecipient from "./ExpandedRecipient";
import { useState } from "react";

const TransferPickRecipient = ({
  recipient,
  setRecipient,
  filterText,
  onFilterTextChange,
  recipients,
  onNext,
}) => {
  const [expandedRecipient, setExpandedRecipient] = useState(null);

  const handleExpand = (recipientId) => {
    setExpandedRecipient(
      recipientId === expandedRecipient ? null : recipientId
    );
  };

  const selectRecipient = (selectedRecipient) => {
    setRecipient(selectedRecipient);
    console.log(selectedRecipient);
  };

  const clearRecipient = () => {
    setRecipient("");
  };

  const filteredRecipients = recipients.filter((recipient) => {
    const searchTerm = filterText.toLowerCase();
    return (
      recipient.username.toLowerCase().includes(searchTerm) ||
      recipient.phone.toLowerCase().includes(searchTerm) ||
      recipient.email.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="max-w-md mx-auto">
      <div className="box-border h-32 w-64 p-4 border-2 dark:border-dark-tertiary mb-4 rounded-md">
        <span className="text-sm space-x-1 flex flex-row font-semibold">
          Selected Recipient:
        </span>
        <p>{recipient.username} </p>
      </div>
      <h1 className="text-lg font-semibold mb-2">Pick a Recipient</h1>
      <label
        htmlFor="searchInput"
        className="block text-sm font-medium text-gray-700"
      >
        Search Recipients
      </label>
      <div className="relative">
        <input
          id="searchInput"
          className="w-full px-4 py-2 rounded-lg shadow-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={(e) => onFilterTextChange(e.target.value)}
        />
        {filterText && (
          <button
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={() => onFilterTextChange("")}
          >
            Clear
          </button>
        )}
      </div>
      <ul className="space-y-2 mt-4">
        {filteredRecipients.map((recipient) => (
          <ExpandedRecipient
            key={recipient.id}
            recipient={recipient}
            expanded={expandedRecipient === recipient.id}
            onItemClick={handleExpand}
            selectRecipient={selectRecipient}
          />
        ))}
      </ul>
      <div className="mt-4">
        {recipient && (
          <button
            className="mr-2 bg-gray-300 hover:bg-gray-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
            onClick={clearRecipient}
          >
            Clear Selection
          </button>
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          onClick={onNext}
          disabled={!recipient}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransferPickRecipient;
