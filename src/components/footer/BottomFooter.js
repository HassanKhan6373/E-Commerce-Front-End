import React from "react";
import PaymentLogo from "./Payment Logos.png";

const BottomFooter = () => {
  return (
    <div className="my-6">
      <div className="flex flex-row justify-self-auto w-35 space-x-96 mx-28">
        <img className="h-9" src={PaymentLogo} alt="Payment Logo" />
        <div className="flex space-x-8 items-end">
          <h3 className="font-bold text-2xl hover:text-red-600 cursor-pointer">
            +(800)1234 5678 90
          </h3>
          <p className="underline hover:text-red-600 cursor-pointer">
            info@company.com
          </p>
        </div>
      </div>
      <br></br>
      <div className="flex mx-28 text-sm">
        Fastor eCommerce © 2021. All Rights Reserved
      </div>
    </div>
  );
};

export default BottomFooter;
