import React from "react";
import WalletBalance from "../WalletBalance";
import AuthContext from "../../context/AuthContext";
import { ConfirmDialog } from "../dialogs/ConfirmDialog";
import { useContext } from "react";
import { Link } from "react-router-dom";

function CardTab({Type,CardholderName,CardNumber,ExpDate,Brand}){

    
    return (
        <div class="max-w-xs mx-auto dark:bg-dark-primary rounded-lg outline dark:outline-dark-secondary shadow-md overflow-hidden mt-24">
    <div class="dark:bg-dark-secondary px-4 py-2">
        <h2 class="text-lg font-medium text-center dark:text-light-primary">{Type} Card</h2>
    </div>
    <div class="px-4 py-5 sm:p-6">
        <div class="flex flex-col align-items-center items-center justify-between mb-6">
            <span class="text-sm font-medium dark:text-light-primary">Cardholder Name</span>
            <span class="text-lg font-medium dark:text-light-primary">{CardholderName}</span>
        </div>
        <div class="flex  flex-col align-align-items-lg-center items-center justify-between mb-6">
            <span class="text-sm font-medium dark:text-light-primary">Card Number</span>
            <span class="text-lg font-medium dark:text-light-primary">{CardNumber}</span>
        </div>
        <div class="flex flex-row items-center justify-between mb-6">
            <div class="flex flex-col  text-center">
                <span class="text-sm font-medium dark:text-light-primary">Expiration Date</span>
                <span class="text-lg font-medium dark:text-light-primary">{ExpDate}</span>
            </div>
            <div class="flex flex-col text-center">
                <span class="text-sm font-medium dark:text-light-primary">Brand</span>
                <span class="text-lg font-medium dark:text-light-primary">{Brand}</span>
            </div>
        </div>
       
    </div>
</div>
        
    )
    
}
export default CardTab;