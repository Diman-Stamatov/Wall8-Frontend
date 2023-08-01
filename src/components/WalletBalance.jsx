import { FaWallet } from "react-icons/fa";

function WalletBalance({ balance }) {
  return (
    <div className="container max-h-screen mx-auto p-6 mt-2 bg-transparent outline-none outline-zinc-700 rounded-xl shadow-md space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <FaWallet size={24} className="text-green-600 mr-2" />
          <h2 className="text-zinc-500 font-bold text-lg font-roboto">
            Wallet Balance
          </h2>
        </div>
      </div>
      <div className="p-4 border-t-2 border-l-4 border-green-800 rounded-lg shadow-sm">
        <span className="text-gray-500 text-xl font-roboto">
          ${balance.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
export default WalletBalance;
