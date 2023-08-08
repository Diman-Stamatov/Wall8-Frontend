import React from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const AddCardButton = () => {
    const navigate = useNavigate();
  
    function initAddCard() {
      navigate("/credit-card-add");
    }
  
    return (
      
       <button
            onClick={initAddCard}
            className=" bg-transparent text-green-500 transition-transform transform hover:scale-110 hover:z-10 ">
            <BsPlusCircleFill className="text-8xl" />
            
          </button>
    );
  };
  
  export default AddCardButton;