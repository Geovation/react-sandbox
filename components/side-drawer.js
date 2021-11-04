import React from "react";
import { styled, useTheme } from "@mui/material/styles";

import Link from "next/link";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";
import Box from "@mui/material/Box";

import MapIcon from "@mui/icons-material/Map";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import ListIcon from "@mui/icons-material/List";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideDrawer({ open, setOpen }) {
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} size="large">
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <Link href="/" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <a>Home</a>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/google-maps" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <a>Google Maps</a>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/form" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <a>Form</a>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/mapbox" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <a>Mapbox</a>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/webcam" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <PhotoCameraIcon />
                </ListItemIcon>
                <a>Webcam</a>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/geolocation" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <GpsFixedIcon />
                </ListItemIcon>
                <a>Geolocation</a>
              </ListItemButton>
            </Link>
          </ListItem>

          <ListItem>
            <Link href="/large-lists" passHref>
              <ListItemButton>
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <a>Large Lists</a>
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
