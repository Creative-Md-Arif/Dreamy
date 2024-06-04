/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";
import { cartImg } from "../../assets/image";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

const Cart = () => {
  const productData = useSelector((state) => state.dreamy.productData);
  console.log(productData);
  return (
    <section>
      <img src={cartImg} alt="" className="h-60 object-cover w-full" />
      <div className="container flex gap-10 py-10 ">
        <div className="w-2/3 bg-red-400">cartItem</div>
        <div className=" w-1/3  border shadow-lg p-3">
          <h3 className=" font-titleFont text-2xl font-bold text-black">
            Order Summary
          </h3>
          <div>
            <div className=" flex flex-col gap-4 py-5 border-b-2">
              <div className="flex justify-between">
                <p className="font-titleFont text-[20px] font-normal text-gray-400">Subtotal</p>
                <p className="font-titleFont text-[20px] font-bold text-black">$565</p>
              </div>
              <div className="flex justify-between">
                <p className="font-titleFont text-[20px] font-normal text-gray-400">Discount(-20%)</p>
                <p className="font-titleFont text-[20px] font-bold text-red-500">-$113</p>
              </div>
              <div className="flex justify-between">
                <p className="font-titleFont text-[20px] font-normal text-gray-400">Delivery Fee</p>
                <p className="font-titleFont text-[20px] font-bold text-black">$15</p>
              </div>
            </div>
            <div >
              <h4 className="font-titleFont text-[20px] font-normal text-black">Total</h4>
              <p>$467</p>
            </div>
            <div>
              <p>Add promo code </p>
              <button>Apply</button>
            </div>
            <button>
              Go to Checkout <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
