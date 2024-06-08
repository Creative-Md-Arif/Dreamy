// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const PromoDiscount = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <div className=" fixed w-full ">
      <div className="bg-blue-500 text-white px-4 py-4 flex justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x ">
        <p className="text-center">
          Special Promotion: Get 10% off on all items! Use code <span className=" font-sans text-black text-2xl mx-2 font-semibold">PROMO10</span> at
          checkout.
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className=" absolute right-1 top-1 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default PromoDiscount;
