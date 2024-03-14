import React, { useState } from "react";
import styled from "styled-components";
import logo from "../Components/img/logo.png";
import { Typography, AppBar, Toolbar } from "@mui/material";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import Sidebar from "../Components/Navbar/AdminSidebar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AddMenu() {
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState(0);
  // const [category, setCategory] = useState("Non veg");
  const [itemInfo, setItemInfo] = useState(null);
  const [imageProfile, setImageProfile] = useState(null);
  let navigate = useNavigate();

  const handleChange = (event) => {
    setItemInfo({ ...itemInfo, [event.target.name]: event.target.value });
  };

  const handleFileChange = (e) => {
    setImageProfile(e.target.files[0]);
  };

  const addMenu = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", itemInfo.title);
    data.append("price", itemInfo.price);
    data.append("category", itemInfo.category);
    data.append("imageProfile", imageProfile);
    // itemData.append("title", title);
    // itemData.append("price", price);
    // itemData.append("category", category);
    console.log(data);
    axios
      .post("http://localhost:7000/api/adminmenu/addmenu", data)
      .then(async (response) => {
        console.log(response);
        // setTitle("");
        // setImageProfile("");
        // setPrice(0);
        // setCategory("");
        alert("Item Added to Menu..");
        await navigate("/adminmenu");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
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

      <Container>
        <FormContainer>
          <h3>Add Menu Items</h3>
          <InputContainer>
            <p>Title</p>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              // onChange={(e) => setTitle(e.target.value)}
              // value={title}
            />
          </InputContainer>
          <InputContainer>
            <p>Upload Image</p>
            <input
              onChange={handleFileChange}
              name="imageProfile"
              type="file"
              // onChange={(e) => setUploadImage(e.target.files[0])}
              // value={imageURL}
            />
          </InputContainer>

          <InputContainer>
            <p>Price</p>
            <input
              type="number"
              onChange={handleChange}
              name="price"
              // onChange={(e) => setPrice(e.target.value)}
              // value={price}
            />
          </InputContainer>
          {/* <InputContainer>
            <p>Category</p>
            <input
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              value={category}
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
            onChange={handleChange}
            name="category"
            value="Non Veg"
            // onChange={(e) => setCategory(e.target.value)}
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

          {/* modal */}
          {/* <Button onClick={handleOpen}>Open modal</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal> */}
          <Button onClick={addMenu}>Add Item</Button>
        </FormContainer>
      </Container>
    </div>
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

  &:hover {
    border: 1px solid black;
  }
`;
export default AddMenu;
