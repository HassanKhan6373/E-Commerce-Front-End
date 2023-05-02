import React from "react";
import { BsTruck } from "react-icons/bs";
import { BsBox } from "react-icons/bs";
import { TfiWallet } from "react-icons/tfi";
import { RiSecurePaymentLine } from "react-icons/ri";

const ExtraInfo = () => {
  return (
    <div>
      <section className="text-gray-600 text-base body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4 text-center border-t border-b border-gray-200 py-5">
            <div className="flex justify-center space-x-5 text-2xl items-center p-0 sm:w-1/4 w-1/2">
              <BsTruck />
              <h2 className="text-sm text-gray-600">Free Delivery</h2>
            </div>
            <div className="flex justify-center space-x-5 text-2xl items-center p-0 sm:w-1/4 w-1/2">
              <BsBox />
              <h2 className="text-sm text-gray-600">Non-contact shipping</h2>
            </div>
            <div className="flex justify-center space-x-5 text-2xl items-center p-0 sm:w-1/4 w-1/2">
              <TfiWallet />
              <h2 className="text-sm text-gray-600">Money back guarantee</h2>
            </div>
            <div className="flex justify-center space-x-5 text-2xl items-center p-0 sm:w-1/4 w-1/2">
              <RiSecurePaymentLine />
              <h2 className="text-sm text-gray-600">Secure payments</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtraInfo;
