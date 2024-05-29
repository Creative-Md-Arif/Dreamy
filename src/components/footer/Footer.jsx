/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#F0F0F0] py-10">
      <div className="container">
        <div className="grid grid-cols-5 gap-10 pb-6">
        <div className=" flex flex-col gap-5">
          <h1 className=" text-[36px] font-bold text-black uppercase animate-pulse">
            Dreamy
          </h1>
          <p className="font-normal text-black text-lg leading-[24px]">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div>
            <ul className="flex items-start gap-3 ">
              <Link to="#">
                <li className=" flex items-center justify-center bg-white w-8 h-8 rounded-full text-black hover:bg-black hover:text-white transition duration-300">
                  <FaXTwitter />
                </li>
              </Link>
              <Link to="#">
                <li className=" flex items-center justify-center bg-white w-8 h-8 rounded-full text-black hover:bg-black hover:text-white transition duration-300">
                  <FaFacebookF />
                </li>
              </Link>
              <Link to="#">
                <li className=" flex items-center justify-center bg-white w-8 h-8 rounded-full text-black hover:bg-black hover:text-white transition duration-300">
                  <FaInstagram />
                </li>
              </Link>
              <Link to="#">
                <li className=" flex items-center justify-center bg-white w-8 h-8 rounded-full text-black hover:bg-black hover:text-white transition duration-300">
                  <FaGithub />
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* company */}
        <div className=" flex flex-col gap-5 pt-2">
          <h3 className="text-[24px] font-medium text-black uppercase">
            company
          </h3>
          <div>
            <ul className="flex flex-col gap-3 overflow-hidden ">
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    About
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Features
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Works
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Works
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* help */}
        <div className=" flex flex-col gap-5 pt-2">
          <h3 className="text-[24px] font-medium text-black uppercase">
           help
          </h3>
          <div>
            <ul className="flex flex-col gap-3 overflow-hidden ">
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Customer Support
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Delivery Details
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Terms & Conditions
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Privacy Policy
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* faq */}
        <div className=" flex flex-col gap-5 pt-2">
          <h3 className="text-[24px] font-medium text-black uppercase">
            h a q
          </h3>
          <div>
            <ul className="flex flex-col gap-3 overflow-hidden ">
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Account
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Manage Deliveries
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Orders
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Payments
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        {/* resources */}
        <div className=" flex flex-col gap-5 pt-2">
          <h3 className="text-[24px] font-medium text-black uppercase">
            Resources
          </h3>
          <div>
            <ul className="flex flex-col gap-3 overflow-hidden ">
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Free eBooks
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Development Tutorial
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    How to  Blog
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
              <Link to="#">
                <li>
                  <span className="w-full text-lg hover:text-teal-400 duration-300 cursor-pointer relative group">
                    Youtube Playlist
                    <span className="absolute h-[1px] w-full  bg-red-400 inline-flex -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                  </span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
        </div>
        <FooterBottom/>
      </div>
      
    </footer>
  );
};

export default Footer;
