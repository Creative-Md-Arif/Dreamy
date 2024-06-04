/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../../../redux/dreamySlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Product = () => {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const Location = useLocation();
  useEffect(() => {
    setProductDetails(Location.state.item);
  }, []);

  // Select Colors Function
  const product = {
    id: 1,
    name: "Cool T-Shirt",
    colors: [
      { name: "Red", hex: "#FF0000" },
      { name: "Green", hex: "#00FF00" },
      { name: "Blue", hex: "#0000FF" },
    ],
  };
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  // Select Colors Function End
  // Select Chose Size Function Start
  const productSize = {
    id: 1,
    size: [
      { name: "Small", },
      { name: "Medium" },
      { name: "Large" },
      { name: "X-Large" },
    ],
  };

  const [selectedSize, setSelectedSize] = useState(productSize.size[0]);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };





  // Select Chose Size Function End

  // console.log(productDetails);
  return (
    <section>
      <ToastContainer />
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
            {/* select color Code Start */}
            <div className="border-b-[1px] pb-5">
              <div className="flex flex-col gap-3">
                <h4>Select Colors</h4>
                <div className="">
                  <p>Selected Color: {selectedColor.name}</p>
                </div>
                <div className="color-options flex pt-3 ">
                  {product.colors.map((color) => (
                    <div
                      key={color.name}
                      className="color-option mr-3 w-6 h-6 rounded-full cursor-pointer"
                      style={{
                        backgroundColor: color.hex,
                        border:
                          selectedColor.name === color.name
                            ? "2px solid black"
                            : "1px solid grey",
                      }}
                      onClick={() => handleColorSelect(color)}
                    />
                  ))}
                </div>
              </div>
            </div>
            {/* select color Code End */}
            {/* select Size  Code Start*/}
            <div className="border-b-[1px] pb-5">
              <div className="flex flex-col gap-3">
                <h4>Select Size</h4>
                <div>
                  <p>Selected Size: {selectedSize.name}</p>
                </div>
                <div className="flex gap-5">
                  {productSize.size.map((size) => (
                    <div
                      key={size.name}
                      className="border py-1 px-3 rounded-md cursor-pointer"
                      style={{
                        border:
                          selectedSize.name === size.name
                            ? "2px solid black"
                            : "1px solid grey",
                      }}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Quantity And Add to cart */}
            <div className="flex gap-4 border-b-[1px] pb-5 ">
              <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                <div className=" flex items-center gap-4 text-sm font-semibold">
                  <button
                    onClick={() =>
                      setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{baseQty}</span>
                  <button
                    onClick={() => setBaseQty(baseQty + 1)}
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: productDetails.id,
                      title: productDetails.title,
                      image: productDetails.image,
                      price: productDetails.price,
                      quantity: baseQty,
                      description: productDetails.description,
                      color : selectedColor.name,
                      size: selectedSize.name,
                    }),
                    toast.success(
                      baseQty + ` ${productDetails.title} is added`,
                      {
                        position: "top-center",
                        autoClose: 5000,
                        closeOnClick: true,
                      }
                    )
                  )
                }
                className="bg-black text-white py-3 px-6 active:bg-gray-800"
              >
                Add to cart
              </button>
            </div>
            {/* category */}
            <div>
              <p className="font-paragraphFont text-xl font-medium text-black">
                Category: {productDetails.category}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;
