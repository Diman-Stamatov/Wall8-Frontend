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
      {/* <main classname="p-10 flex justify-around">
        <button classname="p-5 m-2 bg-green-500 text-white rounded-lg flex flex-col items-center">
          <bspluscircle classname="text-6xl" />
          <span>add funds</span>
        </button>
        <button
          onclick={() => setshowmodal(true)}
          classname="p-5 m-2 bg-blue-500 text-white rounded-lg flex flex-col items-center"
        >
          <bscreditcard classname="text-6xl" />
          <span>add card</span>
        </button>
        {showmodal && (
          <div classname="modal">
            <div classname="backdrop" onclick={() => setshowmodal(false)}>
              <div
                classname="modal-content"
                onclick={(e) => e.stoppropagation()}
              >
                {<creditcardadd />}
              </div>
            </div>
          </div>
        )}
        <button classname="p-5 m-2 bg-yellow-500 text-white rounded-lg flex flex-col items-center">
          <bsarrowupright classname="text-6xl" />
          <span>transfer</span>
        </button>
      </main> */}
    </div>
  );
};

export default UserDashboard;
