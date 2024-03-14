


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import tableCellClasses from '@mui/material/TableCell';
import { useState, useEffect } from 'react';
import Button from "@mui/material/Button";
import axios from 'axios';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import Layout from '../components/Layout/Layout';
import Avatar from '@mui/material/Avatar';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const [selecteditem, setSelectedItem] = useState(null);
  const [cartItem, setcartItem] = useState([]);
  const [count, setCount] = useState(false);
  const [menuItem, setMenuItem] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // State to hold the total cart price

  const handleOpen = (cartitem) => {
    setOpen(true);
    setSelectedItem(cartitem._id);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    axios
      .delete(
        "http://localhost:7000/api/usercart/deleteCartItem/" + selecteditem
      )
      .then((response) => {
        setcartItem(response.data);
        // setCount(!count);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });

  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/api/usercart/getcart"
        );
        setcartItem(response.data.cart);
        // Calculate total cart price
       
        const totalPrice = response.data.cart.reduce((acc, item) =>acc + parseInt(item.price), 0);
        setTotalPrice(totalPrice);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);;

  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "skyblue" }}>
            <TableRow>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              {/* <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItem.map((cartitem) => (
              <StyledTableRow
                key={cartitem.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <StyledTableCell align="right"><Avatar sx={{ bgcolor: "red[500]" }} aria-label="recipe">
                  <img src={`http://localhost:7000/uploads/${cartitem.imageProfile}`} alt="" />
                </Avatar>{cartitem.title}</StyledTableCell>
                <StyledTableCell align="right">{cartitem.quantity}</StyledTableCell>
                <StyledTableCell align="right">₹{cartitem.price}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleOpen(cartitem)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>




                {/* modal for delete */}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Attempting to Delete
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      Are you sure, You want to delete ??
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
                    >
                      <Button variant="contained" color="error" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        onClick={handleDelete}
                        variant="contained"
                        color="success"
                      >
                        Yes, Delete
                      </Button>
                    </Box>
                  </Box>
                </Modal>
                {/* <TableCell align="right">{row.protein}</TableCell> */}
              </StyledTableRow>
            )


            )}
          </TableBody>
        </Table>
        <Typography variant="h6" align="right" sx={{ mr:"478px" }}>Total Price: ₹{Number(totalPrice).toFixed(2)}</Typography>
      </TableContainer>
    </Layout>
  );
}