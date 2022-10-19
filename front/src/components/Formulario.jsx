/** @format */

import * as React from 'react';
import Button from '@mui/material/Button';
// import Avatar from '@mui/material/Avatar';
// import CssBaseline from '@mui/material/CssBaseline';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
  palette: {
    orange: {
      main: '#D8552B',
      contrastText: '#fff',
    },
  },
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
      '"Sansita One"',
    ].join(','),
  },
});
let Rtheme = createTheme();
Rtheme = responsiveFontSizes(Rtheme);

export default function Formulario() {
  return (
    <Card
      width="542px"
      height="660px"
      sx={{
        px: '71px',
        borderRadius: '20px',
        ml: '48px',
        backgroundColor: '#F3F3F3',
        boxShadow:
          '200px 132px 96px rgba(0, 0, 0, 0.01), 113px 74px 81px rgba(0, 0, 0, 0.05), 50px 33px 60px rgba(0, 0, 0, 0.09), 13px 8px 33px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);',
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <ThemeProvider theme={Rtheme}>
          <Typography variant="h5">Welcome</Typography>
          <Typography variant="h5">to</Typography>
          <Typography variant="h4" fontFamily="Amatica SC">
            Unstick Airlines
          </Typography>
        </ThemeProvider>
      </Grid>
      <CardMedia
        component="img"
        height="140"
        image="/front/src/assets/login-logo.jpg"
        alt="Plain Logo"
      />
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          xs={5}
        >
          <ThemeProvider theme={theme}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              color="orange"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Card>
  );
}
