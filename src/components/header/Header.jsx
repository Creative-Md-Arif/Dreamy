/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { profileImg } from "../../assets/image";
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
  const navLinks = [
    { title: "shop ", path: "/" },
    { title: "On Sale ", path: "/" },
    { title: "New Arrivals ", path: "/" },
    { title: "Brands ", path: "/" },
  ];

  return (
    <header className="py-6 bg-gradient-to-b from-gray-300 to-teal-500 sticky top-0 z-50">
      <div className="flex items-center justify-around">
        <div>
          <h1 className=" text-[42px] font-bold text-black uppercase animate-pulse">
            Dreamy
          </h1>
        </div>
        <div className="flex items-center gap-10">
          {navLinks.map(({ title, path }) => (
            <ul key={title}>
              <li className=" font-serif text-xl font-normal text-black uppercase hover:text-gray-500 transition duration-300">
                <Link to="/">{title}</Link>
              </li>
            </ul>
          ))}
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
           <Link>
              <div>
              <FiShoppingCart className="text-3xl" />
              </div>
           </Link>
           <div>
            <img className="w-10 h-10 rounded-full" src={profileImg} alt="" />
           </div>         
        </div>
      </div>
    </header>
  );
};

export default Header;
