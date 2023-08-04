import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const TransferButton = () => {
  const navigate = useNavigate();

  function initTransfer() {
    navigate("/transfer");
  }

  return (
    <Button onClick={initTransfer} className="dark:bg-dark-quaternary">
      <span>Transfer</span>
    </Button>
  );
};

export default TransferButton;
