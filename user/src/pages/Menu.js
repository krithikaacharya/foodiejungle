// import React from 'react'
// import Layout from '../components/Layout/Layout'
// import { Menulist } from '../data/data'
// import { Box, Card, CardActionArea, CardContent, CardMedia ,Typography,Button} from '@mui/material'
// import { useState,useEffect } from 'react'
// import axios from "axios";

// const Menu = () => {

//   const [menuItem, setMenuItem] = useState([]);
//   console.log(menuItem);
//   const [cart, setCart] = useState([]);
//   // const [count, setCount] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:7000/api/adminmenu/getmenu"
//         );
//         setMenuItem(response.data.menu);
//         // Assuming the data is an array
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToCart = (selectedMenuItem) => {
//     // Add the selected menu item to the cart state
//     setCart([...cart, selectedMenuItem]);
//   };

//   return (
//     <Layout>
//       <Box  sx={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
//         {
//           menuItem.map(menu => (
//             <Card  sx={{maxWidth:"400px"  , display:"flex"}}>
//               <CardActionArea>
            
             
//                 <CardMedia sx={{ minHeight: "400px" }} component={'img'} src={`http://localhost:7000/uploads/${menu.imageProfile}`} alt={menu.title} />

//                 <CardContent  >
//             <Typography  sx={{ flexGrow: 1, marginLeft: "150px" }} variant="h5"  gutterBottom  component={"div"}>
//               {menu.title}
              
//             </Typography>
//             <Typography  sx={{ flexGrow: 1, marginLeft: "160px" }} variant="h5">
//               {menu.price}Rs
//             </Typography>
        
//             </CardContent>
//             <Button    sx={{ flexGrow: 1, marginLeft: "150px" }}  onClick={() => addToCart(menu)} variant="contained" color="primary">
//               ADD TO CART
//             </Button> 
//               </CardActionArea> 
                     
//             </Card>
//           ))
//         }
//       </Box>
//     </Layout>

//   )
// }

// export default Menu





// import React, { useState ,useEffect} from 'react'
// import {Modal} from 'react-bootstrap'
// // import { addToCart } from '../actions/cartActions';
// import axios from 'axios';

// export default function Menu() {
//    const [quantity, setquantity] = useState(1)
//    const [varient, setvarient] = useState('small')
//    const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
// //   function addtocart()
// //   { 
// //       dispatch(addToCart(pizza,quantity,varient))
      
// //   }



//   const [menuItem, setMenuItem] = useState([]);
//   console.log(menuItem);
//   // const [count, setCount] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:7000/api/adminmenu/getmenu"
//         );
//         setMenuItem(response.data.menu);
//         // Assuming the data is an array
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//    return (
//       <div  className='shadow-lg p-3 mb-5 bg-white rounded'>
        
//         <div onClick={handleShow}>
//         <h1 >{menuItem.title}</h1>
//          <img src={menuItem.image} className="img-fluid" style={{ height: "200px", width: "200px" }} />
//         </div>
       

//          <div className='flex-container'>
//               {/* <div className='w-100  m-1'>
//                 <p>Variants</p>
//                 <select className='form-control' value={varient} onChange={(e) => { setvarient(e.target.value) }}>
//                     {menuItem.variants.map(varient => { return <option value={varient}>{varient}</option> })}
//                 </select>
//               </div> */}

//             {/* <div className='w-100 m-1'>
//                <p>Quantity</p>
//                <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
//                   {[...Array(10).keys()].map((x, i) => {
//                      return <option value={i + 1}> {i + 1}</option>
//                   })}
//                </select>
//             </div> */}
//          </div>
//          <div className='flex-container'>
//             <div className='m-1  w-100'>
//                <h1 className='mt-1'>Price: {menuItem.price} Rs</h1>
//             </div>

//             <div className='m-1  w-100'>
//                <button className='btn' >ADD TO CART</button>
//             </div>

//          </div>

//          {/* <Modal show={show}>
//             <Modal.Header closeButton>
//                <Modal.Title>{menuItem.name}</Modal.Title>
//             </Modal.Header>

//             <Modal.Body>
//               <img  src={menuItem.image}  className="img-fluid" style={{height:"300px !important"}}/>
//               <p>{menuItem.description}</p>
//             </Modal.Body>

//             <Modal.Footer>
//                <button className="btn" onClick={handleClose}>Close</button>
              
//             </Modal.Footer>
//          </Modal> */}

//       </div>
//    )
// }



// import React, { useState,useEffect } from 'react';
// import { Card, Button} from 'react-bootstrap';

// import axios from "axios";

// const Item = () => {
//   const [menuItem, setMenuItem] = useState([]);
//     console.log(menuItem);
//     const [show, setShow] = useState(false);
//     // const [quantity, setQuantity] = useState(0)
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     // const [count, setCount] = useState(false);
  
//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             "http://localhost:7000/api/adminmenu/getmenu"
//           );
//           setMenuItem(response.data.menu);
//           // Assuming the data is an array
//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       };
  
//       fetchData();
//     }, []);
//     const addItem = (e) => {
//       let item = {
//           id : e.target.value,
//       }        
//       // props.onAdd(item)
//   }

// return (
//   <>
//   <Card className="menu-item">
//       <Card.Img variant="top" src={menuItem.imageProfile} onClick={handleShow} />
//       <Card.Body>
//           <Card.Title onClick={handleShow}>{menuItem.title}</Card.Title>
//           <Card.Text onClick={handleShow}>
//           S${(menuItem.price)}
//           {/* Some quick example text to build on the card title and make up the bulk of
//           the card's content. */}
//           </Card.Text>
//           <Button 
//               variant="primary" 
//               value={menuItem.id}
//               onClick={addItem}
//           >
//               Add To Cart
//           </Button>
//       </Card.Body>
//   </Card>

//   {/* <ItemDetail
//    {...props}
//    show={show}
//    handleClose={handleClose}
//    onAddQuantity={onAddQuantity}
//   /> */}

//   </>
// )
// }

// export default Item


import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MenuCard from "./MenuCard";
import axios from "axios";
import Layout from '../components/Layout/Layout'
// import logo from "../Components/img/logo.png";
// import Sidebar from "../Components/Navbar/Sidebar";
import { Typography, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";


function Menu() {
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

  

  return (
     <Layout>
      {/* <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
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
      </AppBar> */}

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
      </Layout>
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

export default Menu;