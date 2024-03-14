import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Components/img/logo.png";
import { Typography, AppBar, Toolbar } from "@mui/material";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import Sidebar from "../Components/Navbar/AdminSidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function OrderDetail() {
  return (
    <div>
      <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
        <Toolbar>
          <Sidebar />
          <img className="nav-logo" src={logo} alt="" />
          <Typography
            color={"goldenrod"}
            variant="h4"
            sx={{ flexGrow: 1, marginLeft: "10px" }}
          >
            Foodie Jungle Restaurant
          </Typography>
          <Link style={{ color: "white", cursor: "pointer" }} to={"/home"}>
            <HomeIcon />
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default OrderDetail;
