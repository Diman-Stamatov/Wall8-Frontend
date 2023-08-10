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
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <MainHeader username={username} setUsername={setUsername} />
        <div className="flex-grow pt-4">
          <TabsDefault />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
