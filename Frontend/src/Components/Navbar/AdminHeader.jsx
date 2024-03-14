import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import logo from "../img/logo.png";
import "./Navbar.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Sidebar from "./AdminSidebar";

export default function Header() {
  let navigate = useNavigate();
  const logout = async () => {
    alert("Are you sure you want to logout??");
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
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

          <Box>
            <ul className="navigation-menu">
              {/* <li>
                <Link to={"/adminmenu"}>Menu</Link>
              </li> */}

              <div style={{ cursor: "pointer" }}>
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/cart"}
                >
                  <FastfoodIcon />
                  <div className="nav-cart">0</div>
                </Link>
              </div>
              <li>
                <Button variant="contained" color="error" onClick={logout}>
                  Logout
                </Button>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
