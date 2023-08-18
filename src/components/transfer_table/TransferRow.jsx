import React, { useState } from "react";
import DetailsModal from "./DetailsModal"; // Import your DetailsModal component

const TransferRow = ({ transfer, userLocale }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <td className="px-5 py-5 text-sm font-semibold">
      <div className="group flex relative justify-center">
        <p
          onClick={openModal}
          className={`${
            transfer.type === "incoming" ? "text-green-600" : "text-red-600"
          } italic font-bold whitespace-no-wrap text-center cursor-pointer`}
        >
          {new Intl.NumberFormat(userLocale, {
            style: "currency",
            currency: transfer.baseCurrency,
          }).format(transfer.baseAmount)}
        </p>
        {showModal && (
          <DetailsModal
            sentText={
              transfer.type === "incoming"
                ? `${transfer.senderUsername} sent you`
                : `You sent`
            }
            sentAmount={new Intl.NumberFormat(userLocale, {
              style: "currency",
              currency: transfer.baseCurrency,
            }).format(transfer.baseAmount)}
            receivedText={
              transfer.type === "incoming"
                ? `You received`
                : `${transfer.recipientUsername} received`
            }
            receivedAmount={new Intl.NumberFormat(userLocale, {
              style: "currency",
              currency: transfer.currency,
            }).format(transfer.amount)}
            onClose={closeModal}
          />
        )}
      </div>
    </td>
  );
};

export default TransferRow;
