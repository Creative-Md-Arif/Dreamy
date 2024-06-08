/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartImg, vector } from "../../assets/image";
import { BsArrowRight } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../../redux/dreamySlice";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const userInfo = useSelector((state) => state.dreamy.userInfo);
  const productData = useSelector((state) => state.dreamy.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const [baseDiscountAmt, setBaseDiscountAmt] = useState(0);
  const [promoDiscountAmt, setPromoDiscountAmt] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const deliveryCharge = 10; //Define the default delivery charge
  const baseDiscountRate = 0.2; // Define the base discount rate (20%)
  const promoDiscountRate = 0.1; // Define the promo discount rate (10%)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    // Calculate the base discount amount
    const baseDiscountAmount = price * baseDiscountRate;
    setBaseDiscountAmt(baseDiscountAmount);

    // Calculate the promo discount amount if promo is applied
    const promoDiscountAmount = promoApplied ? price * promoDiscountRate : 0;
    setPromoDiscountAmt(promoDiscountAmount);

    // Calculate the subtotal (total - discount + delivery charge)
    const discountPrice = price - baseDiscountAmount - promoDiscountAmount;
    const finalAmount = discountPrice + deliveryCharge;

    setTotalAmt(price); // Set the total amount before discount and delivery charge
    setSubTotal(finalAmount); // Set the final amount after discount and delivery charge
  }, [productData, promoApplied]);

  const handleApplyPromoCode = () => {
    if (promoCode === "PROMO10") {
      setPromoApplied(true);
    } else {
      toast.error("Invalid promo code");
    }
  };

  const handleCheckOut = () => {
    if (userInfo == null) {
      navigate("/registration");
    } else {
      navigate("/paymentGetaway");
    }
  };

  return (
    <section className="">
      <ToastContainer />
      <img src={cartImg} alt="" className=" h-72 object-cover w-full" />
      <div className="container">
        <div className="flex flex-col gap-2 py-5">
          {/* back to home */}
          <Link
            to="/"
            className="text-xl  text-gray-400 hover:text-black duration-300"
          >
            <span>Home / Cart</span>
          </Link>
          <h2 className=" font-headingFont font-bold text-3xl text-black">
            Your Cart
          </h2>
        </div>
        {/* CartItem Start */}
        <div className="flex pb-10 gap-10">
          <div className="w-2/3">
            <div className="border">
              {productData.map((item) => (
                <div key={item.id} className="flex gap-5 m-5 pb-5 border-b-2">
                  <div className="w-[10%]">
                    <img
                      className="w-28 h-28 border p-2"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="w-[50%] py-2">
                    <h3>{item.title}</h3>
                    <p>
                      <strong>Size: </strong>
                      {item.size}
                    </p>
                    <p>
                      <strong>Color: </strong>
                      {item.color}
                    </p>
                    <p>
                      <strong>Price: </strong>
                      {item.price}
                    </p>
                  </div>
                  <div className="w-[40%] flex flex-col items-end justify-between cursor-pointer">
                    <div className="text-3xl text-red-800 ">
                      <MdDeleteOutline
                        onClick={() =>
                          dispatch(deleteItem(item.id)) &
                          toast.error(`${item.title} is removed`, {
                            position: "top-center",
                            autoClose: 5000,
                            closeOnClick: true,
                          })
                        }
                      />
                    </div>
                    <div>
                      <p className="text-center">
                        = ${item.quantity * item.price}
                      </p>
                    </div>
                    <div className=" flex items-center gap-4 text-sm font-semibold border py-2 px-4">
                      <button
                        onClick={() =>
                          dispatch(
                            decrementQuantity({
                              id: item.id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                              color: item.name,
                              size: item.name,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            incrementQuantity({
                              id: item.id,
                              title: item.title,
                              image: item.image,
                              price: item.price,
                              quantity: 1,
                              description: item.description,
                              color: item.name,
                              size: item.name,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* reset button */}
            <button
              onClick={() =>
                dispatch(resetCart()) & toast.error("Your Cart Is Empty")
              }
              className="bg-red-500 text-white mt-8  py-1 px-6 hover:bg-red-800 transition duration-300"
            >
              Reset All Cart
            </button>
          </div>
          {/* Order Summary Start */}
          <div className=" w-1/3 h-fit  border shadow-lg p-3">
            <h3 className=" font-titleFont text-2xl font-bold text-black">
              Order Summary
            </h3>
            <div>
              <div className=" flex flex-col gap-4 py-5 border-b-2">
                <div className="flex justify-between">
                  <p className="font-titleFont text-[20px] font-normal text-gray-400">
                    Total Amount:
                  </p>
                  <p className="font-titleFont text-[20px] font-bold text-black">
                    ${totalAmt}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-titleFont text-[20px] font-normal text-gray-400">
                    Discount(-20%)
                  </p>
                  <p className="font-titleFont text-[20px] font-bold text-red-500">
                    -${baseDiscountAmt}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="font-titleFont text-[20px] font-normal text-gray-400">
                    Delivery Fee
                  </p>
                  <p className="font-titleFont text-[20px] font-bold text-black">
                    +${deliveryCharge}
                  </p>
                </div>
                <div>
                  {promoDiscountAmt > 0 && (
                    <p className="flex justify-between font-titleFont text-[20px] font-normal text-gray-400">
                      Promo Discount Applied:{" "}
                      <span className="font-titleFont text-[20px] font-bold text-red-500">
                        -${promoDiscountAmt.toFixed(2)}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-between pt-5 ">
                  <h4 className="font-titleFont text-[20px] font-normal text-black">
                    SubTotal
                  </h4>
                  <p className="font-titleFont text-[20px] font-bold text-black">
                    ${subTotal.toFixed(2)}
                  </p>
                </div>
                <div className="flex justify-between gap-5">
                  <div className="flex gap-2 bg-[#F0F0F0] px-4 py-2 w-full rounded-full ">
                    <img src={vector} alt="" />
                    <input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Add promo code"
                      className="bg-transparent outline-none"
                    />
                  </div>
                  <button
                    onClick={handleApplyPromoCode}
                    className="bg-black text-white px-12 py-2 rounded-full "
                  >
                    Apply
                  </button>
                </div>
                <div>
                  <div
                    onClick={handleCheckOut}
                    className="flex items-center justify-center gap-2 bg-black py-2 text-white rounded-full cursor-pointer"
                  >
                    <button className="flex items-center gap-2">
                      Go to Checkout <BsArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
