/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { profileImg } from "../../assets/image";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const userInfo = useSelector((state) => state.dreamy.userInfo);
  const productData = useSelector((state) => state.dreamy.productData);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleProfile = ()=> {
       if(userInfo){ 
        navigate("/profile");
       }else{
        navigate("/registration");
       }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white shadow-md transition-transform duration-500 z-50 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <div className="flex items-center justify-around">
        <div>
          <Link to="/">
            <h1 className=" text-[42px] font-bold text-black uppercase animate-pulse">
              Dreamy
            </h1>
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <Link to="/">
              <li className=" font-serif text-xl font-normal text-black uppercase hover:text-gray-500 transition duration-300">
                shop
              </li>
            </Link>
            <Link to="/">
              <li className=" font-serif text-xl font-normal text-black uppercase hover:text-gray-500 transition duration-300">
                On Sale
              </li>
            </Link>
            <Link to="/">
              <li className=" font-serif text-xl font-normal text-black uppercase hover:text-gray-500 transition duration-300">
                New Arrivals
              </li>
            </Link>
            <Link to="/">
              <li className=" font-serif text-xl font-normal text-black uppercase hover:text-gray-500 transition duration-300">
                Brands
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <div className="">
            <input
              type="text"
              placeholder="Search"
              className="bg-white text-gray-800 border border-gray-300 rounded-full py-2 px-4 pl-10 focus:outline-none focus:border-blue-500 transition duration-500 ease-in-out"
            />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Link to="/cart">
            <div className=" relative">
              <FiShoppingCart className="text-[50px]" />
              <span className=" absolute w-6 top-2 left-5 text-xl flex items-center justify-center">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link onClick={handleProfile}>
            <div>
              <img className="w-10 h-10 rounded-full" src={userInfo
            ? userInfo.photoURL
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnfAxGV-fZxGL9elM_hQ2tp7skLeSwMyUiwo4lMm1zyA&s"
           }  alt="" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
