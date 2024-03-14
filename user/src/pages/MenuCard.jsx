import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 5,
  borderRadius: "25px",
};

function MenuCard({ title, imageProfile, price, category, id }) {
  // const [menuItem, setMenuItem] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [totalprice, setTotalPrice] = useState("")
  
  

//  const handleChange = (event) => {
//     setAge(event.target.value);
//   };
 const  addToCart=()=> {
  // const data=new FormData();
  // data.append("title",title);
  // data.append("price",price);
  // data.append("category",category);
  // data.append("id",id);
   console.log(title,price,category,id,imageProfile,quantity,"nnj")


  axios
  .post("http://localhost:7000/api/usercart/addcart",{title,price,category,id,imageProfile,quantity})
  .then(async (response) => {
  
  })
  .catch((error) => {
    alert(error.message);
  });
};

  
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7000/api/adminmenu/getmenu")
  //     .then((response) => {
  //       console.log(response.data);
  //       const totalprices=response.data.menu.reduce((acc,item)=>acc+(item.price*quantity))
  //       setTotalPrice(totalprices);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  

  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(false);
  const [quantity,setQuantity] = useState();

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
    console.log(item._id, "hiiiiii");
  };

  const handleClose = () => setOpen(false);

  const handlequantity = (event) => {
  //  var totalprices=parseInt(quantity * price);
  //  console.log(totalprices);
    setQuantity(event.target.value );
  };


 
  
  return (
    <>
      <Container>
        <Image>
          <img src={`http://localhost:7000/uploads/${imageProfile}`} alt="" />
        </Image>
        {/* <Description>
          <h5>{title}</h5>
         
          <Category>{category}</Category>
          
          <p>₹{price}</p>
          
        </Description> */}
        <Card
          sx={{
            maxWidth: "300px",
            // maxHeight:"5000px",
            display: "flex",
            m: 2,
          }}
        >
          <CardActionArea>

            <CardContent>
              <Typography
                sx={{ fontWeight: "bold", margin: "10px", }}
                variant="h6"
                gutterBottom
                component={"div"}
              >
                 {/* {pizza.prices[0][varient] * quantity} */}
                {title} ---- ₹  {price}
              </Typography>
              
              {/* <Typography   sx={{
            maxWidth: "10px",maxHeight:"10px"
                 }}>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
               
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </Typography> */}

              <div>
                <select  onChange={handlequantity} name="quantity"
                  style={{
                    backgroundColor: "yellow",
                    margin: "10px",
                    padding: "2px 6px",
                    borderRadius: "10px",
                    
                  }}
                >
                  {Array.from(Array(6), (e, i) => {
                    return (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>

                {/* <select
                  rounded
                  style={{
                    backgroundColor: "yellow",
                    margin: "10px",
                    padding: "2px 6px",
                    borderRadius: "10px",
                  }}
                >
                  <option value="half">Half</option>
                  <option value="full">full</option>
                </select> */}
              </div>
              <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    sx={{ bgcolor: "green" ,margin:"20px"}}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
              </CardActions>
            </CardContent>
          </CardActionArea>
        </Card>

      </Container>

    </>
  );
}

const Category = styled.div`
  background-color: #fa89;
  width: 45%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  text-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 110%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
  border: 1px solid purple;
  border-radius: 10px;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
  flex: 0.3;

  img {
    width: 230px;
    height: 230px;
  }
`;
const Description = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h5 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 50%;
    height: 33px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #1a1a1a;
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
  }
`;

export default MenuCard;
