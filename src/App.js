import { Container, Grid } from "@material-ui/core";
import HomePage from "./components/home-page";
import { useTheme } from "@material-ui/core/styles";

function App() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={3}
        style={{ backgroundColor: "#ffa726" }}
      >
        <HomePage />
      </Grid>
    </Container>
  );
}

export default App;
