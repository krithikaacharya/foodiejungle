import React from "react";
import styled from "styled-components";
import logo from "../Components/img/logo.png";
import { Typography, AppBar, Toolbar } from "@mui/material";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import Sidebar from "../Components/Navbar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

function UpdateMenu({ selectedItem, setSelectedItem }) {
  let navigate = useNavigate();
  const handleChange = (event) => {
    setSelectedItem({
      ...selectedItem,
      [event.target.name]: event.target.value,
    });
  };
  console.log(selectedItem, "hghghg");

  const handleSubmit = (event) => {
    // const data = new FormData();
    // data.append("title", selectedItem.title);
    // data.append("imageURL", selectedItem.imageURL);
    // data.append("price", selectedItem.price);
    // data.append("category", selectedItem.category);
    axios
      .put(
        `http://localhost:7000/api/adminmenu/updatemenu/${selectedItem?._id}`,
        selectedItem
      )
      .then(async (response) => {
        console.log(response, "ghhgh");
        await navigate("/adminmenu");
      })
      .catch((error) => {
        console.log(error);
      });
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
          <Link style={{ color: "white", cursor: "pointer" }} to={"/home"}>
            <HomeIcon />
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        <FormContainer>
          <h3>Update Menu Items</h3>
          <InputContainer>
            <p>Title</p>
            <input
              name="title"
              onChange={handleChange}
              value={selectedItem?.title}
            />
          </InputContainer>
          <InputContainer>
            <p>ImageURL</p>
            <input
              name="imageURL"
              type="text"
              onChange={handleChange}
              value={selectedItem?.imageURL}
            />
          </InputContainer>
          <InputContainer>
            <p>Price</p>
            <input
              name="price"
              type="number"
              onChange={handleChange}
              value={selectedItem?.price}
            />
          </InputContainer>
          {/* <InputContainer>
            <p>Category</p>
            <input
              name="category"
              type="text"
              onChange={handleChange}
              value={selectedItem?.category}
            />
          </InputContainer> */}
          <p
            style={{
              fontSize: "14px",
              fontWeight: "600",
              marginLeft: "-78%",
              marginBottom: "8px",
            }}
          >
            Category
          </p>
          <select
            rounded
            name="category"
            value={selectedItem?.category}
            onChange={handleChange}
            style={{
              backgroundColor: "#fa89",
              marginLeft: "-70%",
              padding: "2px 6px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <option value="Non Veg">Non Veg</option>
            <option value="Veg">Veg</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Beverages">Beverages</option>
            <option value="Ice Cream">Ice Cream</option>
          </select>

          <Button onClick={handleSubmit}>Update Item</Button>
        </FormContainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 80%;
  min-width: 600px;
  height: fit-content;
  padding: 15px;
  margin-top: 18%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.form`
  border: 1px solid lightgrey;
  width: 75%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 10px;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 5px;

    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Button = styled.div`
  width: 140px;
  height: 25px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
  text-align: center;
`;
export default UpdateMenu;
