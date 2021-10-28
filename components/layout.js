import Navbar from "./navbar";
import Footer from "./footer";
import SideDrawer from "./side-drawer";
import React from "react";
import Box from "@mui/material/Box";

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Navbar open={open} setOpen={setOpen} />
        <SideDrawer open={open} setOpen={setOpen} />
        <main>{children}</main>
        <Footer />
      </Box>
    </>
  );
}
