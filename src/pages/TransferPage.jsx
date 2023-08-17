import { useNavigate } from "react-router";
import TransferForm from "../components/transfers/transferprocess/TransferForm";
import { useAuth } from "../context/AuthContext";

const TransferPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-16 py-7 dark:bg-gradient-to-t dark:from-dark-primary dark:to-light-quaternary shadow-light-quaternary shadow-2xl rounded-lg">
        <TransferForm user={user} />
        <button onClick={() => navigate("/")}
        className="bottom-0 left-0 text-dark-quaternary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TransferPage;
