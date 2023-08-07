import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import AddFundsButton from "./AddFundsButton";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import FilterableTransactionTable from "./transfers/transfertable/FilterableTransactionTable";
import TransferTab from "./transfers/TransferTab";
import UserProfileTab from "./profile/UserProfileTab";
import { Card } from "@mui/material";
import CardTab from "./cards/Card";
import { useCards } from "../context/CardContext";


export function TabsDefault() {
  const authContext = useContext(AuthContext);
  const [balance, setBalance] = useState(authContext.user.data.balance);
  const [transfers, setTransfers] = useState(
    authContext.user.data.sentTransfers

  );
  const [cards, setCards] = useState(authContext.user.data.bankCards);
  
  useEffect(
    () => {
      setBalance(authContext.user.data.balance);
      setTransfers(authContext.user.data.sentTransfers);
      setCards(authContext.user.data.bankCards);
    },
    [authContext.user.data.balance],
    [authContext.user.data.sentTransfers],
    [authContext.user.data.bankCards]

  );
    console.log("Cards:" , cards);
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
      component:(
        <CardTab cards = {cards}/>
      ),
    },
  ];

  return (
    <Tabs value="tab1" className=" ">
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
