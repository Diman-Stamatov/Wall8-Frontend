import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import {PhoneNumberForm} from "../profile/PhoneNumberForm";

function UpdatePhoneNumberModal({ showModal, setShowModal }) { 
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdate = async (values, { setSubmitting, resetForm }) => {
    console.log("update phone values:", values);
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.put(
        "http://localhost:5120/api/virtual-wallet/users/change-phone-number",
        {          
          newPhoneNumber: values.newPhoneNumber          
        },
        { withCredentials: true }
      );
      console.log("update phone response: ", response);      
      resetForm();
    } catch (error) {
      setSubmitting(false);
      console.log("update phone error: ", error);
    }
    setShowModal(false);
    reload();
  };

  const handleCancel = () => {
    setShowModal(false);
    
  };

  if (!showModal) {
    return null;
  }

  const validationSchema = Yup.object().shape({    
    newPhoneNumber: Yup.string().min(10).required("Required")
  });

  return (
    <div className="modal">
      <div className="backdrop" onClick={() => setShowModal(false)}>
        <div
          className="modal-content p-6 bg-transparent outline-none outline-zinc-700 rounded-xl shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <PhoneNumberForm
            validationSchema={validationSchema}
            handleUpdate={handleUpdate}
            isLoading={isLoading}
          />
          <tr className="flex justify-center ">           

            <td>
              <button
                onClick={handleCancel}
                className="p-2 bg-gray-800 text-white rounded-lg w-full text-lg font-bold font-roboto"
              >
                Cancel
              </button>
            </td>
          </tr>
        </div>
      </div>
    </div>
  );
}

export default UpdatePhoneNumberModal;
