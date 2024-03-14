import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";

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

function MenuCard({ title, image, price, category, id }) {
  // const [menuItem, setMenuItem] = useState([]);
  const [open, setOpen] = React.useState(false);

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

  const [selectedItem, setSelectedItem] = useState(null);
  const [count, setCount] = useState(false);

  const handleOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
    console.log(item._id, "hiiiiii");
  };

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    axios
      .delete(
        "http://localhost:7000/api/adminmenu/deletemenu/" + selectedItem._id
      )
      .then((response) => {
        console.log(response.data);
        setCount(!count);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <Image>
          <img src={image} alt="" />
        </Image>
        <Description>
          <h5>{title}</h5>
          {/* <Rating
          name="half-rating-read"
          defaultValue={rating}
          precision={1}
          readOnly
        /> */}
          <Category>{category}</Category>
          {/* <select
          style={{
            backgroundColor: "orange",
            margin: "5px auto",
            padding: "2px 6px",
            marginLeft: "-2px",
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
        </select> */}
          <p>₹{price}</p>
          <Link to={`/update-menu/${id}`}>
            <Button>
              <DriveFileRenameOutlineIcon /> Update
            </Button>
          </Link>
          <Button
            onClick={handleOpen}
            variant="outlined"
            color="error"
            sx={{ marginLeft: "50%" }}
          >
            <DeleteIcon />
            Delete
          </Button>
        </Description>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Attempting to delete!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Are you sure, want to delete?
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
            >
              <Button onClick={handleClose} variant="contained" color="error">
                Cancel
              </Button>
              <Button
                onClick={handleDelete}
                variant="contained"
                color="success"
              >
                Yes,Delete
              </Button>
            </Box>
          </Box>
        </Modal>
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
  height: 100%;

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
