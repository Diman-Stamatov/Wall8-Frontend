import TransferForm from "../components/transfers/transferprocess/TransferForm";
import { useAuth } from "../context/AuthContext";

const TransferPage = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-16 py-7 dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary shadow-light-quaternary shadow-2xl rounded-lg">
        <TransferForm user={user} />
      </div>
    </div>
  );
};

export default TransferPage;
