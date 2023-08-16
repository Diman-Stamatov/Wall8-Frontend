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
import { FaMoneyBillTransfer } from "react-icons/fa6";
import UserStatisticsCards from "./users/UserStatisticsCards";
import TransferInit from "./users/TransferInit";
import UserSection from "./profile_tab/UserSection";
import WalletSection from "./profile_tab/WalletSection";
import TransferSection from "./profile_tab/TransferSection";
import StatsSection from "./profile_tab/StatsSection";

export function TabsDefault() {
  const authContext = useContext(AuthContext);
  const [wallet, setWallet] = useState(authContext.user.data.wallet.balance);
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

    setWallet(authContext.user.data.wallet.balance);
    setTransfers(combinedTransfers);
    setCards(authContext.user.data.bankCards);
  }, [
    authContext.user.data.wallet.balance,
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
        <div className="flex h-screen justify-between">
          <div className="w-1/3 flex flex-col ">
            <UserSection />
            <WalletSection wallet={wallet} />
          </div>
          <div className="flex flex-col justify-items-end w-1/2">
            <TransferSection />
            <StatsSection />
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
        </div>
      ),
    },
  ];

  return (
    <Tabs value="profile">
      <TabsHeader
        className=" dark:border-dark-secondary p-0 drop-shadow-2xl mx-2"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-light-quaternary dark:border-b-2 dark:border-dark-tertiary drop-shadow-2xl rounded-none",
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
