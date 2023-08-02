import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import WalletBalance from "./WalletBalance";
import AddFundsButton from "./AddFundsButton";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import FilterableTransactionTable from "./transfertable/FilterableTransactionTable";
import TransferTab from "./transfers/TransferTab";

export function TabsDefault() {
  const authContext = useContext(AuthContext);
  const [balance, setBalance] = useState(authContext.user.data.balance);

  useEffect(() => {
    setBalance(authContext.user.data.balance);
  }, [authContext.user.data.balance]);

  const transactions = [
    { id: "1", date: "25/08", name: "tusanko", amount: 100, type: "incoming" },
    { id: "2", date: "12/12", name: "petar", amount: 50, type: "incoming" },
    { id: "3", date: "11/09", name: "diman4o", amount: 80, type: "outgoing" },
    { id: "4", date: "24/12", name: "k0seb0s3", amount: 20, type: "outgoing" },
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
            <FilterableTransactionTable transactions={transactions} />
          </div>
        </div>
      ),
    },
    {
      label: "Transfers",
      value: "tab2",
      desc: "Tab 2 content",
      component: <TransferTab transactions={transactions} />,
    },
  ];

  return (
    <Tabs value="tab1" className="bg-teal-700 ">
      <TabsHeader className="tab-header-container header-background drop-shadow-2xl mx-2 mt-3 pb-2">
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
