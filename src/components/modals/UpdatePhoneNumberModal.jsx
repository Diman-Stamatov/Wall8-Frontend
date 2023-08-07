import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import {PhoneNumberForm} from "../profile/PhoneNumberForm";

function UpdatePhoneNumberModal({ showModal, setShowModal, setUpdated }) { 
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
    debugger
    setUpdated(true);

    
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
          className="modal-content p-6 bg-transparent outline-none rounded-xl shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <PhoneNumberForm
            validationSchema={validationSchema}
            handleUpdate={handleUpdate}
            isLoading={isLoading}
            handleCancel = {handleCancel}
          />
          <tr className="flex justify-center ">  
          </tr>
        </div>
      </div>
    </div>
  );
}

export default UpdatePhoneNumberModal;
