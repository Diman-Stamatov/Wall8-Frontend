import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import AddFundsButton from "./AddFundsButton";
import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import TransferTab from "./transfers/TransferTab";
import UserProfileTab from "./profile/UserProfileTab";
import CardTab from "./cards/Card";
import { CreditCardIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import AddCardButton from "./cards/AddCardButton";
import { DiAndroid } from "react-icons/di";
import { FaMoneyBillTransfer } from "react-icons/fa6";

export function TabsDefault() {
  const authContext = useContext(AuthContext);
  const [balance, setBalance] = useState(authContext.user.data.balance);
  const [transfers, setTransfers] = useState([]);
  const [cards, setCards] = useState(authContext.user.data.bankCards);

  useEffect(() => {
    const incomingTransfers = authContext.user.data.receivedTransfers.map(
      (transfer) => ({
        ...transfer,
        type: "incoming",
      })
    );

    const outgoingTransfers = authContext.user.data.sentTransfers.map(
      (transfer) => ({
        ...transfer,
        type: "outgoing",
      })
    );

    const combinedTransfers = [...incomingTransfers, ...outgoingTransfers];

    setBalance(authContext.user.data.balance);
    setTransfers(combinedTransfers);
    setCards(authContext.user.data.bankCards);
  }, [
    authContext.user.data.balance,
    authContext.user.data.sentTransfers,
    authContext.user.data.receivedTransfers,
    authContext.user.data.bankCards,
  ]);
  const data = [
    {
      label: "Profile",
      value: "profile",
      icon: UserCircleIcon,
      component: (
        <div className="md:flex">
          <div className="justify-center">
            <UserProfileTab balance={balance} />
            <AddFundsButton balance={balance} setBalance={setBalance} />
          </div>
        </div>
      ),
    },
    {
      label: "Transfers",
      value: "transfers",
      desc: "Tab 2 content",
      icon: FaMoneyBillTransfer,
      component: <TransferTab transfers={transfers} />,
    },
    {
      label: "Cards",
      value: "cards",
      icon: CreditCardIcon,
      desc: "Tab 3 content",
      component: (
        <div className="flex flex-row flex-wrap gap-6 pl-2">
          <CardTab cards={cards} />
          <AddCardButton />
        </div>
      ),
    },
  ];

  return (
    <Tabs value="funds">
      <TabsHeader
        className=" bg-transparent border-b dark:border-dark-secondary p-0 drop-shadow-2xl mx-2"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-dark-tertiary drop-shadow-2xl rounded-none",
        }}
      >
        {data.map(({ label, value, icon }) => (
          <Tab key={value} value={value}>
            <div className="flex items-center gap-2">
              {React.createElement(icon, { className: "w-5 h-5" })}
              {label}
            </div>
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
