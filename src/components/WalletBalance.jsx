import { FaWallet } from "react-icons/fa";

function WalletBalance({ balance }) {
  return (
    <div className="container max-h-screen mx-auto p-6  bg-transparent  shadow-md space-y-4 ">
      <div className="flex items-center mb-4 justify-center">
        <div className="flex items-center">
          <FaWallet size={24} className="dark:text-dark-tertiary mr-2" />
          <h2 className="dark:text-light-primary font-bold text-lg font-roboto">
            Wallet Balance
          </h2>
        </div>
      </div>
      <div className="text-center p-4 border-t-2 border-l-4 dark:border-dark-tertiary rounded-lg shadow-sm">
        <span className=" dark:text-light-primary text-xl font-roboto">
          ${balance.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
export default WalletBalance;
