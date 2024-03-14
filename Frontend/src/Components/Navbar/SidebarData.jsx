import React from "react";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FastfoodIcon from "@mui/icons-material/Fastfood";

export const SidebarData = [
  // {
  //   title: "Overview",
  //   path: "/overview",
  //   icon: <HomeIcon />,
  //   iconClosed: <ArrowDropDownIcon />,
  //   iconOpened: <ArrowDropUpIcon />,
  // }
  {
    title: "Add Menu Items",
    path: "/add-menu",
    icon: <AddIcon />,
    iconClosed: <ChevronRightIcon />,
  },
  {
    title: "Menu",
    path: "/adminmenu",
    icon: <FastfoodIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
  },
  {
    title: "Order details",
    path: "/orders",
    icon: <BookmarkBorderIcon />,
    iconClosed: <ChevronRightIcon />,
    iconOpened: <ArrowDropUpIcon />,
  },
];
