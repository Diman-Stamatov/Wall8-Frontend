import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { PhoneNumberForm } from "../profile/PhoneNumberForm";
import { useAuth } from "../../context/AuthContext";

function UpdatePhoneNumberModal({ showModal, setShowModal }) {
  const [isLoading, setIsLoading] = useState(false);
  const { refreshUser } = useAuth();

  const handleUpdate = async (values, { setSubmitting, resetForm }) => {
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.put(
        "http://localhost:5120/api/virtual-wallet/users/change-phone-number",
        {
          newPhoneNumber: values.newPhoneNumber,
        },
        { withCredentials: true }
      );
      console.log("update phone response: ", response);
      resetForm();

      await refreshUser();
      setIsLoading(false);
      setSubmitting(false);

    } catch (error) {
      setSubmitting(false);
      console.log("update phone error: ", error);
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  const validationSchema = Yup.object().shape({
    newPhoneNumber: Yup.string()
      .required("Required")
      .test(
        "phone-length",
        "Phone number must be exactly 10 digits",
        function (value) {
          if (value) {
            return value.length === 10;
          }
          return true;
        }
      ),
  });

  return (
    <div className="modal">
      <div className="backdrop" onClick={() => setShowModal(false)}>
        <div
          className="modal-content p-6 bg-transparent outline-none rounded-xl shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <PhoneNumberForm
            validationSchema={validationSchema}
            handleUpdate={handleUpdate}
            isLoading={isLoading}
            handleCancel={handleCancel}
          />
          <tr className="flex justify-center "></tr>
        </div>
      </div>
    </div>
  );
}

export default UpdatePhoneNumberModal;
