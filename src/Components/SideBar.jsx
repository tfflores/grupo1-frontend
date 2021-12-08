import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="secondary"
        sx={{ minHeight: 60 }}
        open={open}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="white"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ color: "white", fontWeight: "bold", display: "flex" }}
            component="div"
          >
            Py-zzeria del GuaRemy
          </Typography>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={process.env.PUBLIC_URL + "/image/pizza.png"}
            alt="pizza"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/grupo1-frontend/Storage">
            <ListItem button key="ocupacion">
              <ListItemText primary="Ocupacion de bodegas" />
            </ListItem>
          </Link>
          <Link to="/grupo1-frontend/Orders">
            <ListItem button key="ordenes">
              <ListItemText primary="Ordenes de compra" />
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
