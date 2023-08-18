import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { PictureForm } from "../profile/PictureForm";
import { useAuth } from "../../context/AuthContext";

function UpdatePictureModal({
  showModal,
  setShowModal,
  setUpdated,
  onPostComplete,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const {refreshUser} = useAuth();

  const handleUpdate = async (values, { setSubmitting, resetForm }) => {
    console.log("update phone values:", values);
    try {
      setSubmitting(true);
      setIsLoading(true);
      const response = await axios.put(
        "http://localhost:5120/api/virtual-wallet/users/change-picture-url",
        {
          newPictureUrl: values.newPictureUrl,
        },
        { withCredentials: true }
      );
      console.log("update picture response: ", response);
      resetForm();
        refreshUser()
      onPostComplete(response);
      setIsLoading(false);
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      console.log("update picture error: ", error);
    }
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  if (!showModal) {
    return null;
  }

  const SUPPORTED_FORMATS = ["jpg", "jpeg", "png"];

  function get_url_extension(url) {
    return url.split(/[#?]/)[0].split(".").pop().trim();
  }

  const validationSchema = Yup.object().shape({
    newPictureUrl: Yup.mixed()
      .required("Please enter a URL...")
      .test("fileFormat", "Please input an image URL", (value) => {
        return SUPPORTED_FORMATS.indexOf(get_url_extension(value)) !== -1;
      }),
  });

  return (
    <div className="modal">
      <div className="backdrop" onClick={() => setShowModal(false)}>
        <div
          className="modal-content p-6 bg-transparent outline-none rounded-xl shadow-md"
          onClick={(e) => e.stopPropagation()}
        >
          <PictureForm
            validationSchema={validationSchema}
            handleUpdate={handleUpdate}
            isLoading={isLoading}
            handleCancel={handleCancel}
          />
        </div>
      </div>
    </div>
  );
}

export default UpdatePictureModal;
