
import React from "react";

import { Cart } from "../Components/Cart/Cart";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../css/Hidden.css"


export const CartPage = () => {
  return (
    <div>
    <Navbar/>
   {/* <AddressForm/> */}
   {/* <CartProduct/> */}
   {/* <Coupons/> */}
   <Cart/>
   <Footer />
    
    </div>
  );
};





