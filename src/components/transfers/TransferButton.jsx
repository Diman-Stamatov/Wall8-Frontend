import { Button } from "@material-tailwind/react";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
const TransferButton = () => {
  const navigate = useNavigate();

  function initTransfer() {
    navigate("/transfer");
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={() => initTransfer()}
        className="bg-transparent rounded-lg hover:-translate-y-2"
      >
        <img
          src="/src/assets/init-transfer.png"
          alt="InitTransfer"
          style={{ width: "160px", height: "160px" }}
        />
      </button>
    </div>
  );
};

export default TransferButton;
