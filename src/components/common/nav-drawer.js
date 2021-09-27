import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Route } from "react-router-dom";
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
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

function NavDrawer(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("React Sandbox");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Route
          render={({ history }) => (
            <List>
              <ListItem
                button
                key="Home"
                onClick={() => {
                  history.push("/");
                  setTitle("React Sandbox");
                }}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>

              <ListItem
                button
                key="Google Maps"
                onClick={() => {
                  history.push("/google-map-page");
                  setTitle("Google Maps");
                }}
              >
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText primary="Google Maps" />
              </ListItem>

              <ListItem
                button
                key="Form"
                onClick={() => {
                  history.push("/form-page");
                  setTitle("Form");
                }}
              >
                <ListItemIcon>
                  <ContactSupportIcon />
                </ListItemIcon>
                <ListItemText primary="Form" />
              </ListItem>

              <ListItem
                button
                key="Auth"
                onClick={() => {
                  history.push("/auth");
                  setTitle("Auth");
                }}
              >
                <ListItemIcon>
                  <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary="Auth" />
              </ListItem>

              <ListItem
                button
                key="Mapbox"
                onClick={() => {
                  history.push("/mapbox-page");
                  setTitle("Mapbox");
                }}
              >
                <ListItemIcon>
                  <MapIcon />
                </ListItemIcon>
                <ListItemText primary="Webcam" />
              </ListItem>
              <ListItem
                button
                key="Webcam"
                onClick={() => {
                  history.push("/webcam-page");
                  setTitle("Webcam");
                }}
              >
                <ListItemIcon>
                  <PhotoCameraIcon />
                </ListItemIcon>
                <ListItemText primary="Webcam" />
              </ListItem>

              <ListItem
                button
                key="Geolocation"
                onClick={() => {
                  history.push("/geolocation-page");
                  setTitle("Geolocation");
                }}
              >
                <ListItemIcon>
                  <GpsFixedIcon />
                </ListItemIcon>
                <ListItemText primary="Geolocation" />
              </ListItem>

              <ListItem
                button
                key="Large Lists"
                onClick={() => {
                  history.push("/large-lists-page");
                  setTitle("Large Lists");
                }}
              >
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary="Large Lists" />
              </ListItem>
            </List>
          )}
        />
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <DrawerHeader />
        {props.pageContent}
      </Box>
    </Box>
  );
}

export default NavDrawer;
