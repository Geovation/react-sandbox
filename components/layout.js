import Navbar from "./navbar";
import Footer from "./footer";
import SideDrawer from "./side-drawer";
import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Navbar open={open} setOpen={setOpen} />
      <SideDrawer open={open} setOpen={setOpen} />
      <Box sx={{ pr: 2, pl: 10, pt: 4, my: 5 }}>
        <Container maxWidth="xl">
          <Box sx={{ minHeight: "100vh" }}>
            <main>{children}</main>
          </Box>
        </Container>
      </Box>
      <Footer />
    </div>
  );
}
