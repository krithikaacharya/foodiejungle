import React, { useState } from "react";
import "../Pages/style.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Box, AppBar, Typography, Toolbar, Button } from "@mui/material";
import logo from "../Components/img/logo.png";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Navbar/Footer";

export default function LoginPage() {
  const [userInfo, setUserInfo] = useState(null);
  // const [password, setPassword] = useState("");
  // const [isLoggedIn, setLoggedIn] = useState(false);
  let navigate = useNavigate();
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  console.log(userInfo);

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:7000/api/admin/login", userInfo)
      .then(async (response) => {
        console.log(response.data);
        if (response.data.success) {
          await localStorage.setItem(
            "admin",
            JSON.stringify(response.data.loggedInUser)
          );
          await localStorage.setItem(
            "token",
            JSON.stringify(response.data.authToken)
          );
          alert(response.data.message);
          await navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (user === "demo" && password === "password") {
  //     setLoggedIn(true);
  //     alert("Login Successful!");
  //   } else {
  //     alert("Invalid Username or Password..");
  //   }
  // };

  return (
    <div>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <img className="nav-logo" src={logo} alt="" />
            <Typography
              color={"goldenrod"}
              variant="h4"
              sx={{ flexGrow: 1, marginLeft: "20px" }}
            >
              Foodie Jungle Restaurant
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <div className="wrapper">
        <Box>
          <h1>Login</h1>
          <div className="input-box">
            <input
              name="email"
              type="text"
              onChange={handleChange}
              placeholder="Email Address"
              required
            />
            <PersonIcon className="icon" />
          </div>
          <div className="input-box">
            <input
              name="password"
              type="password"
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <LockIcon className="icon" />
          </div>

          <div className="remember-forgot">
            {/* <label>
            <input type="checkbox" />
            Remember me
          </label> */}
            <Link to={"/register"} variant="body2">
              {"Don't have an account? Register"}
            </Link>
          </div>

          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </Box>
      </div>
      <Footer />
    </div>
  );
}
