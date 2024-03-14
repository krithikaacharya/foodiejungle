import React from "react";
import UpdateMenu from "../Components/UpdateMenu";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function UpdateItem() {
  // const [token, setToken] = useState(null);
  // let navigate = useNavigate();
  // useEffect(() => {
  //   if (localStorage.getItem("token") == null) {
  //     navigate("/home");
  //   } else {
  //     setToken(JSON.stringify(localStorage.getItem("token")));
  //   }
  // }, []);
  let params = useParams();
  // console.log(params);
  let userId = params.id;
  console.log(userId);
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    // let token = JSON.parse(localStorage.getItem("token"));
    axios
      .get("http://localhost:7000/api/adminmenu/viewSingleItem/" + userId)
      .then((response) => {
        console.log(response);
        setSelectedItem(response.data.menu);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(selectedItem);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Update Menu</h1>
      <UpdateMenu
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
      />
    </div>
  );
}

export default UpdateItem;
