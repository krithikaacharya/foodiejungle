import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import AdminRegister from "../Pages/AdminRegister";
import AdminHome from "./Navbar/AdminHome";
import AdminMenu from "../Pages/AdminMenu";
import AddMenu from "../Pages/AddMenu";
import UpdateItem from "../Pages/UpdateItem";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginPage />} />

          <Route exact path="/register" element={<AdminRegister />} />

          <Route exact path="/home" element={<AdminHome />} />

          <Route exact path="/adminmenu" element={<AdminMenu />} />

          <Route exact path="/add-menu" element={<AddMenu />} />

          <Route exact path="/update-menu/:id" element={<UpdateItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
