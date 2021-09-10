import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Route } from "react-router-dom";

import MapIcon from "@material-ui/icons/Map";
import HomeIcon from "@material-ui/icons/Home";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";
import ListIcon from "@material-ui/icons/List";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1
  }
}));

function NavDrawer(props) {
  const classes = useStyles();
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
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.pageContent}
      </main>
    </div>
  );
}

export default NavDrawer;
