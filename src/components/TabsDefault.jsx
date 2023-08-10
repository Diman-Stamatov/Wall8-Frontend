import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import AddFundsButton from "./AddFundsButton";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import TransferTab from "./transfers/TransferTab";
import UserProfileTab from "./profile/UserProfileTab";
import CardTab from "./cards/Card";
import { BsPlusCircleFill } from "react-icons/bs";
import AddCardButton from "./cards/AddCardButton";

export function TabsDefault() {
  const authContext = useContext(AuthContext);
  const combinedTransfers = [
    ...authContext.user.data.sentTransfers,
    ...authContext.user.data.receivedTransfers,
  ];
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
      label: "Funds",
      value: "tab1",
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
      value: "tab2",
      desc: "Tab 2 content",
      component: <TransferTab transfers={transfers} />,
    },
    {
      label: "Cards",
      value: "tab3",
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
    <Tabs value="tab1">
      <TabsHeader className="tab-header-container dark:bg-dark-primary dark:hover:bg-dark-tertiary drop-shadow-2xl mx-2 mt-3 pb-2">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            <span className="drop-shadow-lg">{label}</span>
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
