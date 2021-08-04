import { Container, Grid } from "@material-ui/core";
import HomePage from "./components/home-page";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";
import TopAppBar from "./components/common/top-app-bar";
import Footer from "./components/common/footer";

function App() {
  const appTheme = useTheme();

  return (
    <ThemeProvider theme={appTheme}>
      <TopAppBar />

      <Container maxWidth="lg" my="auto">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          style={{ minHeight: "100vh" }}
        >
          <HomePage />
        </Grid>
      </Container>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
