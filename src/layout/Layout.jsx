/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import PromoDiscount from "../components/promo/PromoDiscount";

const Layout = () => {
  return (
    <div>
      <Header />
      <PromoDiscount/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
