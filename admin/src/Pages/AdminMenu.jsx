import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuCard from "../Components/MenuCard";
import axios from "axios";
import logo from "../Components/img/logo.png";
import Sidebar from "../Components/Navbar/Sidebar";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function AdminMenu() {
  // const [item, setItem] = useState("");
  const [menuItem, setMenuItem] = useState([]);
  console.log(menuItem);
  // const [count, setCount] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/adminmenu/getmenu"
        );
        setMenuItem(response.data.menu);
        // Assuming the data is an array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7000/api/adminmenu/getmenu")
  //     .then((response) => {
  //       console.log(response.data);
  //       setMenuItem(response.data.menu);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [count]);
  // console.log(menuItem);

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
            Foodie Jungle Menu List
          </Typography>
          <Link style={{ color: "white", cursor: "pointer" }} to={"/home"}>
            <HomeIcon />
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        {/* <h1>Menu List</h1> */}

        <Main>
          {menuItem.map((menu) => {
            console.log(menu.imageProfile, "zzzzzz");
            return (
              <MenuCard
                id={menu._id}
                imageProfile={menu.imageProfile}
                price={menu.price}
                category={menu.category}
                title={menu.title}
              />
            );
          })}
        </Main>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 18vh;
  margin-left: 10px;
  width: 100%;
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(5, 250px);
  grid-gap: 40px;
`;

export default AdminMenu;