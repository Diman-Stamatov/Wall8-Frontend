import { useState } from "react";
import { BsCreditCard, BsArrowUpRight, BsPlusCircle } from "react-icons/bs";
import MainHeader from "./MainHeader";
import { TabsDefault } from "./TabsDefault";
import CreditCardAdd from "./CreditCardAdd";
import "react-credit-cards-2/dist/es/styles-compiled.css";

export const UserDashboard = () => {
  const [username, setUsername] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <div className="flex flex-col">
        <MainHeader username={username} setUsername={setUsername} />
        <TabsDefault />
      </div>
      <main className="p-10 flex justify-around">
        <button className="p-5 m-2 bg-green-500 text-white rounded-lg flex flex-col items-center">
          <BsPlusCircle className="text-6xl" />
          <span>Add Funds</span>
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="p-5 m-2 bg-blue-500 text-white rounded-lg flex flex-col items-center"
        >
          <BsCreditCard className="text-6xl" />
          <span>Add Card</span>
        </button>
        {showModal && (
          <div className="modal">
            <div className="backdrop" onClick={() => setShowModal(false)}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                {<CreditCardAdd />}
              </div>
            </div>
          </div>
        )}
        <button className="p-5 m-2 bg-yellow-500 text-white rounded-lg flex flex-col items-center">
          <BsArrowUpRight className="text-6xl" />
          <span>Transfer</span>
        </button>
      </main>
    </div>
  );
};

export default UserDashboard;
