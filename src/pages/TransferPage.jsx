import TransferForm from "../components/transfers/transferprocess/TransferForm";
import { useAuth } from "../context/AuthContext";

const TransferPage = () => {
  const { user } = useAuth();

  return (
    <div className="px-16 py-7 w-full h-full">
      <TransferForm user={user} />
    </div>
  );
};

export default TransferPage;
