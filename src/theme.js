import {createTheme} from '@material-ui/core/styles';


const theme = createTheme( {
    palette: {
        primary: {
          light: '#ffd95b',
          main: '#ffa726',
          dark: '#c77800',
          contrastText: '#000000',
        },
        secondary: {
          light: '#c3fdff',
          main: '#90caf9',
          dark: '#5d99c6',
          contrastText: '#000000',
        },
      },
      spacing: 8,
});

export default theme;