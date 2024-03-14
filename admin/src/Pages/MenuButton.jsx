// import { MenuList } from "@mui/material";
import React from "react";
import { MenuList } from "../Components/data";

function MenuButton({ menuItems, filterItems, setItems }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {menuItems.map((val) => (
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            margin: "15px 50px",
            fontWeight: "bold",
          }}
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
      <button
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "4px 8px",
          margin: "15px 50px",
          fontWeight: "bold",
        }}
        onClick={() => setItems(MenuList)}
      >
        All
      </button>
    </div>
  );
}

export default MenuButton;
