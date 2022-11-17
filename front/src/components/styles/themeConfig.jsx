import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#2b3a67',
    },
    secondary: {
      main: '#ff9b71',
    },
    orange: {
      main: '#fc813a',
      contrastText: '#fff',
    },
    dark: {
      main: '#272932',
    },
    white: {
      main: '#fefbfc',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#2b3a67',
        },
      },
    },
  },
});
export default theme;
