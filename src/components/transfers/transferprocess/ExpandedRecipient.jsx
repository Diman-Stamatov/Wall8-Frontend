import React from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";

const ExpandedRecipient = ({
  selectRecipient,
  recipient,
  expanded,
  onItemClick,
}) => {
  return (
    <li>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => onItemClick(recipient.id)}
      >
        <span className="text-md font-semibold">{recipient.username}</span>
        <span>
          {expanded ? <MdOutlineExpandLess /> : <MdOutlineExpandMore />}
        </span>
      </div>
      {expanded && (
        <div className="px-4 py-2 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
          <div onClick={() => selectRecipient(recipient)}>
            <span className="text-md font-semibold">{recipient.username}</span>
            <span className="text-sm text-gray-500">{recipient.phone}</span>
            <span className="text-sm text-gray-500">{recipient.email}</span>
          </div>
        </div>
      )}
    </li>
  );
};

export default ExpandedRecipient;
