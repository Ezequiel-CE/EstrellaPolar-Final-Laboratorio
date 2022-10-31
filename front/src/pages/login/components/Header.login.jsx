import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import PlainLogo from '../../../assets/login-logo.jpg';

let theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Amatica SC"',
    ].join(','),
  },
});
theme = responsiveFontSizes(theme);

export default function HeaderFormulario() {
  return (
    <Box
      sx={{
        backgroundColor: '#F3F3F3',
        marginTop: 4,
      }}
    >
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <ThemeProvider theme={theme}>
          <Typography variant="h5" fontFamily="Roboto">
            Welcome
          </Typography>
          <Typography variant="h5" fontFamily="Roboto">
            to
          </Typography>
          <Typography variant="h4" fontFamily="Amatica SC">
            Unstick Airlines
          </Typography>
        </ThemeProvider>
      </Grid>
      <Grid>
        <CardMedia component="img" height="140" image={PlainLogo} alt="Plain Logo" />
      </Grid>
    </Box>
  );
}
