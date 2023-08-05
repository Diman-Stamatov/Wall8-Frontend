import TransferForm from "../components/transfers/transferprocess/TransferForm";
import { useAuth } from "../context/AuthContext";

const TransferPage = () => {
  const { user } = useAuth();

  return (
    <div className="px-16 py-7 w-full h-full bg-gradient-to-br from-dark-primary to-light-quaternary shadow-2xl rounded-lg">
      <TransferForm user={user} />
    </div>
  );
};

export default TransferPage;
