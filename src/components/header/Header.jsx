/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const navLinks = [
    { title: "shop ", path: "/" },
    { title: "On Sale ", path: "/" },
    { title: "New Arrivals ", path: "/" },
    { title: "Brands ", path: "/" },
  ];

  return (
    <div className="py-6 bg-slate-400"> 
      <div className="flex items-center justify-around">
        <div>
          <h1 className=" text-[32px] font-bold text-black uppercase animate-pulse">Dreamy</h1>
        </div>
        <div className="flex items-center gap-5">
          {navLinks.map(({ title, path }) => (
            <ul key={title}>
              <li className="">
                <Link to="/">{title}</Link>
              </li>
            </ul>
          ))}
        </div>
        <div>
          <input type="text"  placeholder="search"/>
        </div>
        <div>
          cart
        </div>
      </div>
    </div>
  );
};

export default Header;
