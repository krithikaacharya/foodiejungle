import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuList } from "../Components/data";
import "bootstrap/dist/css/bootstrap.min.css";
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
export default function Menu() {
  const [item, setItems] = useState(MenuList);

  const filterItems = (cat) => {
    const newItems = MenuList.filter((newval) => {
      return newval.category === cat;
    });
    setItems(newItems);
  };
  return (
    <>
      <h2 style={{ fontFamily: "cursive", textAlign: "center" }}>Menu List</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            margin: "15px 50px",
            fontWeight: "bold",
          }}
          onClick={() => filterItems("Shakes")}
        >
          Shakes
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            margin: "15px 50px",
            fontWeight: "bold",
          }}
          onClick={() => filterItems("Ice Cream")}
        >
          Ice Cream
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            margin: "15px 50px",
            fontWeight: "bold",
          }}
          onClick={() => filterItems("Non Veg")}
        >
          Non Veg
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            margin: "15px 50px",
            fontWeight: "bold",
          }}
          onClick={() => filterItems("Veg")}
        >
          Veg
        </button>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "4px 8px",
            margin: "15px 50px",
            fontWeight: "bold",
          }}
          onClick={() => filterItems("Beverages")}
        >
          Beverages
        </button>
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

      <div>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {item.map((data) => (
            <Card
              sx={{
                maxWidth: "300px",
                display: "flex",
                m: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ Height: "100px", objectFit: "contain" }}
                  component={"img"}
                  src={data.img}
                />
                <CardContent>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    variant="h6"
                    gutterBottom
                    component={"div"}
                  >
                    {data.title} --- {data.price}
                  </Typography>
                  <Typography variant="body2">{data.desc}</Typography>
                  <div>
                    <select
                      style={{
                        backgroundColor: "orange",
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

                    <select
                      rounded
                      style={{
                        backgroundColor: "orange",
                        margin: "10px",
                        padding: "2px 6px",
                        borderRadius: "10px",
                      }}
                    >
                      <option value="half">Half</option>
                      <option value="full">full</option>
                    </select>
                  </div>
                  <CardActions>
                    <Link to={"/cart"}>
                      <Button
                        size="small"
                        variant="contained"
                        sx={{ bgcolor: "green" }}
                      >
                        Add to Cart
                      </Button>
                    </Link>
                  </CardActions>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </div>
    </>
  );
}
