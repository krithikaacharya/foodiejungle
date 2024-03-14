import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/AdminLoginPage";
import AdminRegister from "../Pages/AdminRegister";
import AdminHome from "./Navbar/AdminHome";
import AdminMenu from "../Pages/AdminMenu";
import AddMenu from "../Pages/AddMenu";
import UpdateItem from "../Pages/UpdateItem";
import OrderDetail from "../Pages/OrderDetail";
import UserHome from "../Components/Navbar/UserHome";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import UserMenu from "../Pages/UserMenu";
import UserSignin from "../Pages/UserSignin";
import UserSignup from "../Pages/UserSignup";
import Pagenotfound from "../Pages/PageNotFound";
import Checkout from "../Checkout/Checkout";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* ----------Admin Routes------------ */}
          <Route exact path="/" element={<LoginPage />} />

          <Route exact path="/register" element={<AdminRegister />} />

          <Route exact path="/home" element={<AdminHome />} />

          <Route exact path="/adminmenu" element={<AdminMenu />} />

          <Route exact path="/add-menu" element={<AddMenu />} />

          <Route exact path="/update-menu/:id" element={<UpdateItem />} />

          <Route exact path="/orders" element={<OrderDetail />} />

          {/* ---------------User Routes--------------------- */}

          <Route exact path="/userhome" element={<UserHome />} />

          <Route exact path="/about" element={<About />} />

          <Route exact path="/contact" element={<Contact />} />

          <Route exact path="/usermenu" element={<UserMenu />} />

          <Route exact path="/Signin" element={<UserSignin />} />

          <Route exact path="/Signup" element={<UserSignup />} />

          <Route exact path="/checkout" element={<Checkout />} />

          <Route exact path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
