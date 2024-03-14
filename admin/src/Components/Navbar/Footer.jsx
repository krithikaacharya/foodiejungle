import { Box, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          bgcolor: "#1A1A19",
          color: "white",
          padding: "15px, 12px",
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            "& Svg:hover": {
              color: "goldenrod",
              transform: "translateX(2px)",
              transition: "ease-in",
            },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <YouTubeIcon />
        </Box>
        <Typography variant="h6">
          All Rights Reserved &copy; FoodieJungle
        </Typography>
      </Box>
    </>
  );
}
