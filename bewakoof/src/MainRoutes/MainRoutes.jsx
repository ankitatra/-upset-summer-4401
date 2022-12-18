import { Route, Routes } from "react-router";
import { Store } from "../Components/Store";
import { CartPage } from "../Pages/CartPage";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Pages/Home";
import { Men } from "../Pages/Men";

import { CheckoutPage } from "../Pages/CheckoutPage";
import {Payment} from "../Pages/Payment";
import { Order_Completed } from "../Pages/order_complete";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cat" element={<Store />} />

      <Route path="/products/:cat/:id" element={<CheckoutPage />} />
      <Route path="/Cart" element={<CartPage />} />
      <Route path="/Cart/Payment" element={<Payment />} />
      <Route path="/Order_successfull" element={<Order_Completed />} />
    </Routes>
  );
};
export default MainRoutes;
