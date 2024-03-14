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
  //   subNav: [
  //     {
  //       title: "Users",
  //       path: "/overview/users",
  //     },
  //   ],
  // },
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
    // subNav: [
    //   {
    //     title: "Shakes",
    //     path: "/menu/shakes",
    //   },
    //   {
    //     title: "Ice Cream",
    //     path: "/menu/ice-cream",
    //   },
    //   {
    //     title: "Non Veg",
    //     path: "/menu/non-veg",
    //   },
    //   {
    //     title: "Veg",
    //     path: "/menu/veg",
    //   },
    //   {
    //     title: "Beverages",
    //     path: "/menu/beverages",
    //   },
    // ],
  },
  {
    title: "Order details",
    path: "/orders",
    icon: <BookmarkBorderIcon />,
    iconClosed: <ChevronRightIcon />,
    iconOpened: <ArrowDropUpIcon />,
  },
];
