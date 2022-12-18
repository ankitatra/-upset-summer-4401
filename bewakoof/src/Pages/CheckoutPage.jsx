import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { RecentView } from "../Components/SingleProduct/RecentView";
import "../css/Hidden.css"
import SingleProductDetial from "../Components/SingleProduct/SingleProductDetails";



export const CheckoutPage = () => {
  return (
    <div>
    <Navbar/>
      <SingleProductDetial />
      <RecentView/>
      <Footer />
    </div>
  );
};
