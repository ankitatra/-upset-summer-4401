import react from "react";
import { AddressForm } from "../Components/Cart/Address";
import { CartProduct } from "../Components/Cart/cardProduct ";
import { Coupons } from "../Components/Cart/Coupons";


export const CartPage = () => {
  return (
    <div>
   <AddressForm/>
   <CartProduct/>
   <Coupons/>
    
    </div>
  );
};
