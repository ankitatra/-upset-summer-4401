import { Route, Routes } from "react-router";
import { Store } from "../Components/Store";
import CartPage from "../Pages/CartPage";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Pages/Home";
import { Men } from "../Pages/Men";

import CheckoutPage from "../Pages/CheckoutPage";
import Payment from "../Pages/Payment";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cat" element={<Store />} />

      <Route path="/products/:cat/:id" element={<CheckoutPage />} />
      <Route path="/products/:cat/:id/Cart" element={<CartPage />} />

      <Route path="/products/:cat/:id" element={<CartPage />} />
    </Routes>
  );
};
export default MainRoutes;
