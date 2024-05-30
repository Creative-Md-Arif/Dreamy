/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Color from "./Color";
import ChoseSize from "./ChoseSize";

const Product = () => {
  const [productDetails, setProductDetails] = useState({});
  const Location = useLocation();
  useEffect(() => {
    setProductDetails(Location.state.item);
  }, []);

 

  console.log(productDetails);
  return (
    <section>
      <div className="container my-10">
        <div className="grid grid-cols-2 items-center gap-10">
          <div className="w-full">
            <div className="flex items-center justify-center">
              <div className=" flex flex-col gap-3 h-full w-1/2">
                <div>
                  <img
                    className="object-cover w-1/2 p-2 border"
                    src={productDetails.image}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-cover w-1/2 p-2 border"
                    src={productDetails.image}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="object-cover w-1/2 p-2 border"
                    src={productDetails.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-2/3 h-full">
                <img
                  className="object-cover w-[100%]"
                  src={productDetails.image}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h1 className=" font-titleFont text-3xl font-medium ">
              {productDetails.title}
            </h1>
            <div className="flex items-center gap-2">
              <FaStar className="text-[#FFC633]" />
              <FaStar className="text-[#FFC633]" />
              <FaStar className="text-[#FFC633]" />
              <FaStar className="text-[#FFC633]" />
              <FaStar />
              <p className="text-gray-600">
                <span className="text-black">4/</span>5
              </p>
            </div>
            <div>
              <p className="font-paragraphFont text-2xl font-bold text-black">
                ${productDetails.price}
              </p>
            </div>
            <div className=" border-b-[1px] pb-5 ">
              <p className="w-2/2 font-paragraphFont text-xl font-medium text-black">
                {productDetails.description}
              </p>
            </div>
            {/* select colors */}
            <div className="border-b-[1px] pb-5">
               <Color/>
            </div>
               {/* select Size */}
            <div className="border-b-[1px] pb-5">
              <ChoseSize/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
