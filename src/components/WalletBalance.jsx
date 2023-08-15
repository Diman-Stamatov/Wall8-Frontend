import { FaWallet } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useUserLocale } from "../context/LocaleContext";

function WalletBalance() {
  const userLocale = useUserLocale();
  const { user } = useAuth();
  const balance = user.data.wallet.balance.balance;
  const curr = user.data.wallet.balance.currency;
  const formattedBalance = new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: curr,
  }).format(balance);

  return (
    <div className="container rounded-xl max-h-screen mx-auto p-6 dark:bg-gradient-to-b dark:from-dark-primary to dark:from- shadow-md space-y-4 ">
      <div className="flex items-center mb-4 justify-center">
        <div className="flex items-center">
          <FaWallet size={24} className="dark:text-dark-tertiary mr-2" />
          <h2 className="dark:text-light-primary font-bold text-lg font-roboto">
            Wallet Balance
          </h2>
        </div>
      </div>
      <div className="text-center p-4 bg-light-quaternary dark:border-dark dark:bg-gradient-to-br dark:from-dark-primary dark:to-light-quaternary rounded-lg shadow-sm">
        <span className="text-light-primary  dark:text-light-primary text-xl font-medium drop-shadow-lg">
          {formattedBalance}
        </span>
      </div>
    </div>
  );
}
export default WalletBalance;
