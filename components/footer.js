import { Box, Container, Grid, Link } from "@mui/material";

function Footer() {
  return (
    <footer>
      <Box bgcolor="#37474f" color="#ffffff" pt={5} pb={10} pr={4} ml={7}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Geovation</Box>
              <Box pt={2}>
                <Link color="inherit">About</Link>
              </Box>
              <Box>
                <Link color="inherit">Services</Link>
              </Box>
              <Box>
                <Link color="inherit">Contact</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Policies</Box>
              <Box pt={2}>
                <Link color="inherit">Privacy</Link>
              </Box>
              <Box>
                <Link color="inherit">Terms</Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Social</Box>
              <Box pt={2}>
                <Link color="inherit">LinkedIn</Link>
              </Box>
              <Box>
                <Link color="inherit">Facebook</Link>
              </Box>
              <Box>
                <Link color="inherit">Twitter</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
