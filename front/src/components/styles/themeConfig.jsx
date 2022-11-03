import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#152177',
    },
    secondary: {
      main: 'rgb(220, 0, 78)',
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
