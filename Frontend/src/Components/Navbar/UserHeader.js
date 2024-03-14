import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "../Navbar/HeaderStyle.css";
import MenuIcon from "@mui/icons-material/Menu";

let button = {
  backgroundColor: "black",
  marginTop: "20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  height: "50px",
  width: "180px",
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
};
const Header = () => {
  const [mobileopen, setMobileopen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileopen(!mobileopen);
  };
  // menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexgrow: 1, my: 2 }}
      >
        <FastfoodIcon />
        Foodie Jungle
      </Typography>

      <ul className="mbl-navigation">
        <li>
          <Link to="/userhome"> Home</Link>
        </li>
        <li>
          <Link to="/usermenu"> Menu</Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="/contact"> Contact</Link>
        </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              arial-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"gold"}
              variant="h6"
              component="div"
              sx={{ flexgrow: 1 }}
            >
              <FastfoodIcon />
              Foodie Jungle{" "}
            </Typography>
            <Divider />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <Link to="/userhome"> Home</Link>
                </li>
                <li>
                  <Link to="/usermenu"> Menu</Link>
                </li>
                <li>
                  <Link to="/about"> About</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact</Link>
                </li>
                {/* <button  style={{button}}>

                                    <li>
                                        <Link to='/sign up'> Sign up/lOGIN</Link>
                                    </li>
                                    
                                </button> */}
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileopen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: "200px" },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
