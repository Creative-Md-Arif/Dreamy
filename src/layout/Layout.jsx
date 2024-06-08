/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import PromoDiscount from "../components/promo/PromoDiscount";

const Layout = () => {
  return (
    <div>
    <div className="">
       <Header />
    </div>
     <div className="absolute top-0 left-0 w-full z-50">
     <PromoDiscount/>
     </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
