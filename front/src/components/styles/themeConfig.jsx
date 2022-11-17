import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#152177',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
    },
    orange: {
      main: '#D8552B',
      contrastText: '#fff',
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
          color: '#152177',
        },
      },
    },
  },
});
export default theme;
