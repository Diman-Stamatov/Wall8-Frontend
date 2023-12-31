import { Avatar } from "@mui/material";
import { useState } from "react";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

const TransferPickRecipient = ({
  recipient,
  setRecipient,
  setSearchTerm,
  searchTerm,
  recipients,
  onNext,
  onNextPage,
  onPrevPage,
  hasNextPage,
  hasPrevPage,
}) => {
  const { user } = useAuth();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => () => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const selectRecipient = (selectedRecipient) => {
    setRecipient(selectedRecipient);
  };

  const clearRecipient = () => {
    setRecipient("");
  };

    const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <div style={{ width: "350px" }}>
      <h1 className="text-4xl text-center mb-4">Select a recipient</h1>
      <div className="focus-within:shadow-lg flex flex-row justify-start max-w-md mb-3">
        <input
          className="transfer-input w-full px-4 py-2 rounded-xl shadow-sm dark:shadow-light-primary dark:bg-inherit focus:outline-none focus:ring-1 focus:ring-inherit focus:border-inherit"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
          style={{ transition: "all .15s ease" }}
        />
      </div>
      <div className="border-2 shadow-lg dark:shadow-dark-primary rounded-lg pt-4 pb-4 px-2 py-2 ">
        <ul className="space-y-2">
          {recipients.map((filtRec, index) => (
            <li
              key={index}
              className={` border rounded-lg px-4 py-2 shadow-inner dark:shadow-light-quaternary ${
                openIndex !== index
                  ? "hover:dark:bg-dark-primary cursor-pointer hover:translate-x-1"
                  : ""
              } dark:text-light-primary`}
            >
              <div
                className="flex justify-between items-center"
                onClick={toggleOpen(index)}
              >
                {openIndex === index ? "" : <Avatar src={filtRec.photoUrl}/>}
                <p className="cursor-pointer text-lg flex  ">
                  {filtRec.username}
                  {recipient.id === filtRec.id && (
                    <AiOutlineCheck className="ml-2 cursor-pointer text-green-500" />
                  )}
                </p>
                {openIndex === index ? (
                  <MdOutlineExpandLess className="cursor-pointer" />
                ) : (
                  <MdOutlineExpandMore className="cursor-pointer" />
                )}
              </div>
              {openIndex === index && (
                <div className="mt-4">
                  <div className="flex items-center">
                    <Avatar src={filtRec.photoUrl}/>
                    <p className="ml-2 font-bold pointer-events-none">
                      {filtRec.username}
                    </p>
                  </div>
                  <div className="border-b mt-2 mb-1"></div>
                  <dl>
                    <div>
                      <dt className="dark:text-dark-tertiary">Email:</dt>
                      <dd>{filtRec.email}</dd>
                    </div>
                    <div className="text-sm">
                      <dt className="dark:text-dark-tertiary">Phone number:</dt>
                      <dd>{filtRec.phoneNumber}</dd>
                    </div>
                  </dl>

                  <div className="flex justify-between">
                    <Link to={`/user/${filtRec.id}`}>
                      <button className="mt-5 hover:translate-x-0.5 cursor-pointer">
                        <label className="dark:text-dark-tertiary text-sm ">
                          View profile
                        </label>
                      </button>
                    </Link>
                    <button
                      className="border  dark:border-light-primary rounded-lg px-2 py-1 hover:translate-x-0.5 hover:bg-gray-100 dark:hover:bg-dark-secondary dark:hover:border-dark-secondary cursor-pointer"
                      onClick={() => selectRecipient(filtRec)}
                    >
                      <p className="dark:text-light-primary ">Select</p>
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-between -mb-4 mx-1">
          <button
            className={`px-4 py-2 0 dark:text-light-primary rounded-lg transition-colors duration-300 ${
              !hasPrevPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-light-secondary"
            }`}
            onClick={onPrevPage}
            disabled={!hasPrevPage}
          >
            Previous
          </button>
          <button
            className={`px-4 py-2 dark:text-light-primary rounded-lg transition-colors duration-300 ${
              !hasNextPage
                ? "opacity-50 cursor-not-allowed"
                : "hover:text-light-secondary"
            }`}
            onClick={onNextPage}
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex-row justify-between flex mt-2">
        <button
          className="text-xl hover:text-light-tertiary focus:outline-none"
          onClick={clearRecipient}
        >
          Clear selection
        </button>
        <button
          disabled={!recipient}
          onClick={onNext}
          className="disabled:hover:bg-dark-quaternary border py-1 px-4 text-center hover:bg-dark-primary hover:translate-x-0.5 rounded-full font-semibold"
        >
          <p className="drop-shadow-2xl">Next</p>
        </button>
      </div>
    </div>
  );
};

export default TransferPickRecipient;
