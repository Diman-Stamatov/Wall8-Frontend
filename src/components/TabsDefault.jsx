import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import WalletBalance from "./WalletBalance";
import TransactionList from "./TransactionList";
import AddFundsButton from "./AddFundsButton";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";

export function TabsDefault() {
  const authContext = useContext(AuthContext);
  const [balance, setBalance] = useState(authContext.user.data.balance);

  useEffect(() => {
    setBalance(authContext.user.data.balance);
  }, [authContext.user.data.balance]);

  const transfers = [
    { date: "25/08", description: "tusanko", amount: 100, isIncoming: true },
    { date: "12/12", description: "petar", amount: 50, isIncoming: false },
    { date: "11/09", description: "diman4o", amount: 80, isIncoming: true },
    { date: "24/12", description: "k0seb0s3", amount: 20, isIncoming: false },
  ];

  const data = [
    {
      label: "Funds",
      value: "tab1",
      component: (
        <div className="md:flex">
          <div className="md:w-1/4 p-3">
            <WalletBalance balance={balance} />
            <AddFundsButton balance={balance} setBalance={setBalance} />
          </div>
          <div className="md:w-2/3 p-5">
            <TransactionList transactions={transfers} />
          </div>
        </div>
      ),
    },
    {
      label: "Cards",
      value: "tab2",
      desc: "Tab 2 content",
    },
  ];

  return (
    <Tabs value="tab1">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
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
