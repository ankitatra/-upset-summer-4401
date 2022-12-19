import { Route, Routes } from "react-router";

import {PrivateRoute} from "../MainRoutes/PrivateRoute"
import { CheckoutPage } from "../Pages/CheckoutPage";

import { OrderCompleted } from "../Pages/order_complete";


import {Payment} from "../Pages/Payment";
import { Signup } from "../Pages/Signup";
import { Signupd } from "../Comp/Signupd";
import { Login } from "../Pages/Login";
import Home from "../Pages/Home";

import { Store } from "../Components/Store";
import { CartPage } from "../Pages/CartPage";
import { Admin } from "../Pages/admin";
import Dashboard from "../Components/FinalAdmin/Dashboard";
import { Users } from "../Components/FinalAdmin/users";
import Adminlogin from "../Components/adminlogin";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cat" element={<Store />} />
      <Route path="/products/:cat/:id" element={<CheckoutPage />} />
      
      <Route path="/Cart" element={<PrivateRoute><CartPage /></PrivateRoute>
      } />
      <Route path="/Cart/Payment" element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path="/Ordersuccessfull" element={<OrderCompleted />} />
      <Route path="/products/:cat/:id" element={<CheckoutPage />} />
      <Route path="/products/:cat/:id/Cart" element={<CartPage/>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signupd" element={<Signupd />} />
      <Route path="/login" element={<Login />} />
      <Route path="/adminadd" element={<Admin/>}/>
      <Route path="/admin" element={<Dashboard/>}/>
      <Route path="/adminusers" element={<Users/>}/>
      <Route path="/adminLogin" element={<Adminlogin/>}/>
        

    </Routes>
  );
};
export default MainRoutes;

