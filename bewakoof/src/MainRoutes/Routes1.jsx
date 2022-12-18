
import {CheckoutPage} from "../Pages/CheckoutPage";
import Payment from "../Pages/Payment";
import { Signup } from "../Pages/Signup";
import { Signupd } from "../Comp/Signupd";
import { Login } from "../Pages/Login";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cat" element={<Store />} />

      <Route path="/products/:cat/:id" element={<CheckoutPage />} />
      <Route path="/products/:cat/:id/Cart" element={<CartPage />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/signupd" element={<Signupd />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
export default MainRoutes;

