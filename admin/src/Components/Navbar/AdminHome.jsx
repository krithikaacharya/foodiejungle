import React from "react";
import "./Navbar.css";
import { Box } from "@mui/material";
import homeimg from "../img/homeimg.png";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Header />
      <div
        style={{
          backgroundImage: `url(${homeimg})`,
          backgroundRepeat: "no-repeat",
          display: "flex",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box sx={{ p: 32.5, width: "96em" }}>
          <h4
            style={{
              color: "white",
              fontSize: "50px",
              fontFamily: "cursive",
              textAlign: "center",
            }}
          >
            Welcome to the Food World
          </h4>
          <p
            style={{
              color: "white",
              fontSize: "30px",
              fontFamily: "cursive",
              textAlign: "center",
            }}
          >
            Best Food In India
          </p>
          {/* <div
            style={{
              textAlign: "center",
            }}
          >
            <Link to={"/menu"}>
              <button className="Order-btn">Order Now</button>
            </Link>
          </div> */}
        </Box>
      </div>
      <Footer />
    </>
  );
}
