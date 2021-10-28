import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <React.Fragment>
      <Box sx={{ pr: 2, pl: 10, my: 5, pt: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
            <h1>Home</h1>
          </Box>
        </Container>
      </Box>
    </React.Fragment>
  );
}
