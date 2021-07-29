import { Container, Grid } from '@material-ui/core';
import HomePage from './components/home-page';
import { useTheme } from '@material-ui/core/styles';


function App() {

  const theme = useTheme();

  return (
    <Container maxWidth="lg">

      <Grid container
        align="center"
        justifyContent="center"
        direction="column"
        style={{ backgroundColor: '#ffa726' }}>
        <HomePage />
      </Grid>
      
    </Container>




  );
}

export default App;
